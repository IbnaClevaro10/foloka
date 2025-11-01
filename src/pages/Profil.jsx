import React from "react";
import ProfilReview from "../components/Profil/Profil-Review";
import Maps from "../components/Profil/Maps";
import Menu from "../components/Profil/Menu";
export default function Profil() {
  return (
    <div className="text-white pt-20 p-10">
        <ProfilReview />
        <Maps />
        <Menu />
    </div>
  );
}
