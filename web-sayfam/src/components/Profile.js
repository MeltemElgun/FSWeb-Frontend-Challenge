import React from "react";
import profile from "./Profile.module.css";
export default function Profile() {
  return (
    <div className={profile.box}>
      {" "}
      <p className={profile.p}>Profile</p>
      <div className={profile.contents}>
        <div className={profile.content}>
          <div className={profile.card}>
            <p className={profile.text}>Basic Information</p>{" "}
            <div className={profile.cardText}>
              <div className={profile.cardTextA}>
                <p>Doğum tarihi</p>
                <p>İkamet Şehri</p>
                <p>Eğitim Durumu</p>
                <p className={profile.span1}>Tercih Ettiği Rol</p>
              </div>
              <div className={profile.cardTextB}>
                <p>24.03.1996</p>
                <p>Ankara</p>
                <p className={profile.span2}>
                  {" "}
                  Hacettepe Ünv. Biyoloji Lisans, 2016
                </p>
                <p>Frontend, UI</p>
              </div>
            </div>
          </div>
        </div>
        <div className={profile.content}>
          <div className={profile.abountText}>
            <p className={profile.aboutTextA}>About me</p>
            <p className={profile.aboutTextB}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
              <br />
              <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
              quod deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
