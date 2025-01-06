import { ID } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  databases,
  ENDPOINT,
  APPOINTMENT_COLLECTION_ID,
  PROJECT_ID,
} from "../appwrite.config";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );

    return JSON.stringify(newAppointment);
  } catch (error) {
    console.error(error);
  }
};
