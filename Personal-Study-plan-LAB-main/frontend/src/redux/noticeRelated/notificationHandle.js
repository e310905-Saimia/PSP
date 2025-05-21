import axios from "axios";
import { 
  fetchNotifications as fetchNotificationsAction,
  markAllNotificationsAsRead
} from "./notificationSlice";
const app_base_url = process.env.REACT_APP_BASE_URL;

// ✅ Fetch notifications 
export const getNotifications = () => async (dispatch) => {
    try {
        dispatch(fetchNotificationsAction());
        // Remove the parameter from the API call
        const response = await axios.get(app_base_url + "/api/notifications");
        return response.data;
    } catch (error) {
        console.error("Error fetching notifications:", error);
    }
};

// ✅ Mark all notifications as read
export const clearNotifications = () => async (dispatch) => {
    try {
        // Remove the parameter from the API call
        await axios.put(app_base_url + "/api/notifications/mark-all-read");
        dispatch(markAllNotificationsAsRead());
    } catch (error) {
        console.error("Error clearing notifications:", error);
    }
};