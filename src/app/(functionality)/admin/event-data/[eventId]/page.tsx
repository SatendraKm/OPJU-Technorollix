// pages/admin/event-data/[eventId].tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import useFetch from "@/hooks/use-fetch";
import { getEventById, getTeamsByEventId } from "@/actions/event-actions";
import { getUsersByEmails } from "@/actions/user-actions";
import * as XLSX from "xlsx";

export default function EventDataPage() {
	const { eventId } = useParams();
	const [fileName, setFileName] = useState("participants");

	const {
		data: eventFetchData,
		loading: eventFetchLoading,
		error: eventFetchError,
		fn: eventFetchFn,
	} = useFetch(getEventById);

	const {
		data: teamsFetchData,
		loading: teamsFetchLoading,
		error: teamsFetchError,
		fn: teamsFetchFn,
	} = useFetch(getTeamsByEventId);

	const {
		data: usersFetchData,
		loading: usersFetchLoading,
		error: usersFetchError,
		fn: usersFetchFn,
	} = useFetch(getUsersByEmails);

	useEffect(() => {
		const fetchData = async () => {
			await eventFetchFn(eventId);
		};

		fetchData();
		teamsFetchFn(eventId);
	}, [eventId]);

	useEffect(() => {
		if (teamsFetchData) {
			const emails = teamsFetchData.flatMap((team) => team.members);
			usersFetchFn(emails);
		}
	}, [teamsFetchData]);

	useEffect(() => {
		if (eventFetchData) {
			const formattedFileName = eventFetchData.name
				.toLowerCase()
				.replace(/\s+/g, "-");
			setFileName(formattedFileName);
		}
	}, [eventFetchData]);


	useEffect(() => {
		if (eventFetchError || teamsFetchError || usersFetchError) {
			toast({
				title: "Error",
				description: "Failed to fetch data",
				variant: "destructive",
			});
		}
	}, [eventFetchError, teamsFetchError, usersFetchError]);

	const handleDownloadExcel = () => {
		const data = teamsFetchData?.flatMap((team) => {
			const leader = usersFetchData?.find(
				(user) => user.email === team.leader
			);
			return team.members.map((memberEmail) => {
				const member = usersFetchData?.find(
					(user) => user.email === memberEmail
				);
				return {
					Name: member?.fullName,
					Email: member?.email,
					Branch: member?.branch,
					EnrollmentNumber: member?.enrollmentNumber,
					isOutsider: member?.isOutsider ? "Yes" : "No",
					Mobile: member?.mobileNumber,
					Address: member?.address,
					TeamLeaderName: leader?.fullName,
					TeamLeaderEmail: leader?.email,
					UserCreatedAt: member?.createdAt,
					TeamCreatedAt: team.createdAt,
				};
			});
		});

		if (data) {
			const worksheet = XLSX.utils.json_to_sheet(data);
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
			XLSX.writeFile(workbook, `${fileName}.xlsx`);
		} else {
			toast({
				title: "Error",
				description: "No data available to download",
				variant: "destructive",
			});
		}
	};

	if (eventFetchLoading || teamsFetchLoading || usersFetchLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">Event Data</h1>
			{eventFetchData && (
				<Card className="mb-6">
					<CardHeader>
						<CardTitle>Event Details</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-between">
						<div>
							<p>Name: {eventFetchData.name}</p>
							<p>PrizeMoney: {eventFetchData.prizeMoney}</p>
							<p>TeamSize: {eventFetchData.teamSize}</p>
						</div>
						<div>
							<p>Users Registered: {usersFetchData?.length}</p>
							<p>Outsiders Registered: {usersFetchData?.filter(user => user.isOutsider).length}</p>
							<p>Insiders Registered: {usersFetchData?.filter(user => !user.isOutsider).length}</p>
						</div>
					</CardContent>
				</Card>
			)}

			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Participants</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>User Details</TableHead>
								<TableHead>Additional Details</TableHead>
								<TableHead>Team Leader Name</TableHead>
								<TableHead>Team Leader Email</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{teamsFetchData &&
								teamsFetchData.map((team) => {
									const leader = usersFetchData?.find(
										(user) => user.email === team.leader
									);
									return team.members.map((memberEmail) => {
										const member = usersFetchData?.find(
											(user) => user.email === memberEmail
										);
										return (
											<TableRow key={member?.email}>
												<TableCell>
													<p>
														Name: {member?.fullName}
													</p>
													<p>
														Email: {member?.email}
													</p>
													<p>
														Branch: {member?.branch}
													</p>
													<p>
														EnrollmentNumber:{" "}
														{
															member?.enrollmentNumber
														}
													</p>
												</TableCell>
												<TableCell>
													<p>
														isOutsider:{" "}
														{member?.isOutsider
															? "Yes"
															: "No"}
													</p>
													<p>
														Mobile:{" "}
														{member?.mobileNumber}
													</p>
													<p>
														Address:{" "}
														{member?.address}
													</p>
												</TableCell>
												<TableCell>
													{leader?.fullName}
												</TableCell>
												<TableCell>
													{leader?.email}
												</TableCell>
											</TableRow>
										);
									});
								})}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Download Participants Data</CardTitle>
				</CardHeader>
				<CardContent>
					<label className="block mb-2">File Name:</label>
					<Input
						type="text"
						placeholder="Enter file name"
						value={fileName}
						onChange={(e) => setFileName(e.target.value)}
						className="mb-2"
					/>
					<Button onClick={handleDownloadExcel}>
						Download as Excel
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
