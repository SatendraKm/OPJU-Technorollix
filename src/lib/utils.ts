/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { eventSubEventData } from "@/data/event-subeventData";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
// Task : use this function to create a middleware for protected routes.
export function isUserAuthenticated(): boolean {
	const token = Cookies.get("auth-token");
	if (!token) {
		return false;
	}

	try {
		const decoded = jwt.verify(
			token,
			process.env.NEXT_PUBLIC_JWT_SECRET || "your_jwt_secret"
		);
		return !!decoded;
	} catch (error) {
		if (error instanceof Error && error.name === "TokenExpiredError") {
			console.error("Token expired:", error);
		} else {
			console.error("Invalid token:", error);
		}
		return false;
	}
}

export function getAuthToken(): string | null {
	return Cookies.get("auth-token") || null;
}

// Should be done at client-side only : localStorage is for client-side storage || Now, we can use Cookies for this purpose.
export const logout = async (): Promise<void> => {
	Cookies.remove("auth-token");
};


export const getMergedEvents = (participatingTeamsData: any[], userEmail: string) => {
	const leadingTeamsWithOutsiders = participatingTeamsData.filter(
		(team: any) => team.leader.email === userEmail && team.members.some((member: any) => member.isOutsider)
	);
	const eventIds = leadingTeamsWithOutsiders.map((team) => team.event._id);
	const eventNames: any = [];

	eventSubEventData.events.forEach((event) => {
		if (eventIds.includes(event.event)) {
			eventNames.push(event.eventName);
		} else {
			event.subEvents.forEach((subEvent) => {
				if (eventIds.includes(subEvent.subEvent)) {
					eventNames.push(event.eventName);
				}
			});
		}
	});

	// Merge teams in subevents of the same event as one
	const mergedTeamsArray: any[] = [];
	const mergedTeams: any = {};

	leadingTeamsWithOutsiders.forEach((team) => {
		const eventId = team.event._id;
		const eventName = eventNames.find((name: any) =>
			eventSubEventData.events.some(
				(event) =>
					event.eventName === name &&
					(event.event === eventId ||
						event.subEvents.some(
							(subEvent) => subEvent.subEvent === eventId
						))
			)
		);

		if (eventName) {
			if (!mergedTeams[eventName]) {
				mergedTeams[eventName] = {
					teams: [],
					individualSchema: true,
				};
			}
			mergedTeams[eventName].teams.push(team);
			if (team.individualSchema === false) {
				mergedTeams[eventName].individualSchema = false;
			}
		}
	});

	for (const eventName in mergedTeams) {
		mergedTeamsArray.push({
			eventName,
			...mergedTeams[eventName],
		});
	}

	return mergedTeamsArray;
};