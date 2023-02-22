import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MyProfileWallet = React.lazy(() => import("pages/MyProfileWallet"));
const MyProfilePreview = React.lazy(() => import("pages/MyProfilePreview"));
const Message = React.lazy(() => import("pages/Message"));
const Saved = React.lazy(() => import("pages/Saved"));
const OtherUserProfile = React.lazy(() => import("pages/OtherUserProfile"));
const MyProfileHistory = React.lazy(() => import("pages/MyProfileHistory"));
const MarketDetail = React.lazy(() => import("pages/MarketDetail"));
const MyProfileCollection = React.lazy(() =>
  import("pages/MyProfileCollection")
);
const Settings = React.lazy(() => import("pages/Settings"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Market = React.lazy(() => import("pages/Market"));
const ActiveBid = React.lazy(() => import("pages/ActiveBid"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/activebid" element={<ActiveBid />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/myprofilecollection"
            element={<MyProfileCollection />}
          />
          <Route path="/marketdetail" element={<MarketDetail />} />
          <Route path="/myprofilehistory" element={<MyProfileHistory />} />
          <Route path="/otheruserprofile" element={<OtherUserProfile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/message" element={<Message />} />
          <Route path="/myprofilepreview" element={<MyProfilePreview />} />
          <Route path="/myprofilewallet" element={<MyProfileWallet />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
