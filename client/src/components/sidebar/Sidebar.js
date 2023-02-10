import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import GroupIcon from "@mui/icons-material/Group";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <SmartDisplayIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <GolfCourseIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/person/2.jpeg"
              alt=""
            ></img>
            <span className="sidebarFriendName">Jane Doe</span>
          </li>

          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
