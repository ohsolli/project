import React from "react";
import "./SidebarOptions.css";
import { Add } from "@material-ui/icons";

function SidebarOptions() {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img src="/" alt="" />
                <p> 정장 입은 내 모습 </p>
            </div>

            <div className="sidebarOption">
                <img src="/" alt="" />
                <p> 프론트엔드 </p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://img.hankyung.com/photo/202009/01.23683388.1.jpg"
                    alt=""
                />
                <p> 백엔드 </p>
            </div>

            <div className="sidebarOption">
                <img src="/" alt="" />
                <p> 취업 관련 </p>
            </div>

            <div className="sidebarOption">
                <img src="/" alt="" />
                <p> 자유게시판 </p>
            </div>

            <div className="sidebarOption">
                <img src="/" alt="" />
                <p> 정보게시판 </p>
            </div>

            <div className="sidebarOption">
                <Add />
                <p className="text"> 더보기 </p>
            </div>
        </div>
    );
}

export default SidebarOptions;
