import React, { useState } from "react";

const Laptop = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div>
      <svg
        width="234"
        height="161"
        viewBox="0 0 234 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

      >
        <g
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Outer Screen */}
          <g>
            <rect
              x="10.5"
              y="2.5"
              width="214"
              height="138"
              rx="7.5"
              fill="#E3E9EC"
              stroke="#373737"
              strokeWidth="5"
            />
            <circle cx="117" cy="10" r="2" fill="#373737" />
            <rect x="16" y="14" width="202" height="121" rx="10" fill="#373737" />
            <rect x="23" y="22" width="105" height="89" fill="#1D1D40" />
            <rect x="23" y="22" width="26" height="89" fill="#141434" />
            <rect x="23" y="22" width="105" height="5" fill="#0A0929" />
            <rect x="23" y="108" width="105" height="3" fill="#1ABCFE" />
            <rect
              x="2.5"
              y="142.5"
              width="229"
              height="16"
              rx="7.5"
              fill="#E3E9EC"
              stroke="#373737"
              strokeWidth="5"
            />
            <rect x="96" y="143" width="43" height="6" rx="3" fill="#373737" />
            <defs>
              <clipPath id="clip0_621_1433">
                <rect
                  width="4"
                  height="6"
                  fill="white"
                  transform="translate(114 45)"
                />
              </clipPath>
            </defs>
          </g>
          {isHover ?
            (<g>
              <path
                d="M32 33H41.5"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 33H29"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 37H33"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 41H33"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 45H29"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36 37H45.5"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36 41H45.5"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 45H41.5"
                stroke="#6F6F8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M61 78H79"
                stroke="#FFDC81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M53 38H82"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M61 48H121"
                stroke="#BCFFC3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M61 53H76"
                stroke="#FF7F7F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M53 43H60"
                stroke="#C79AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M61 58H64"
                stroke="#C79AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M66 63H73"
                stroke="#C79AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M64 43H78"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M81 53H87"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M78 58H81"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M68 58H74"
                stroke="#FF7F7F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M91 53H109"
                stroke="#FFDC81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M78 63H92"
                stroke="#FFAF81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M61 68H71"
                stroke="#B8EAFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M66 73H73"
                stroke="#C79AFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M82 68H97"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M75 68H78"
                stroke="#FF7F7F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M78 73H85"
                stroke="#FFAF81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M82 43H102"
                stroke="#FFDC81"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M86 38H100"
                stroke="#FF7F7F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="107" y="41" width="105" height="89" fill="#CECECE" />
              <rect x="187" y="56" width="25" height="74" fill="#EFEFEF" />
              <path
                d="M191 60H196"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M199 60H204"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M195 70H200"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M191 66H192"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M191 70H192"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M195 74H196"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M198 78H199"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M195 66H204.5"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M199 74H204"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M195 82H196"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M199 82H204"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M191 86H192"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M195 86H208"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M202 78H209"
                stroke="#B2B2B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="107" y="41" width="105" height="15" fill="#241D24" />
              <path
                d="M170 45H176"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M173 45V51"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M155 51V45H161V51H155Z"
                stroke="white"
                strokeLinejoin="round"
              />
              <path
                d="M141 45V51"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M145 45V51"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M140 46H146"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M140 50H146"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g clipPath="url(#clip0_621_1433)">
                <path
                  d="M115.001 51C115.553 51 116.001 50.552 116.001 50V49H115.001C114.449 49 114.001 49.448 114.001 50C114.001 50.552 114.449 51 115.001 51Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M114.001 48C114.001 47.448 114.449 47 115.001 47H116.001V49H115.001C114.449 49 114.001 48.552 114.001 48Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M114 46C114 45.448 114.448 45 115 45H116V47H115C114.448 47 114 46.552 114 46Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M116.5 45.5H117C117.275 45.5 117.5 45.724 117.5 46C117.5 46.276 117.275 46.5 117 46.5H116.5V45.5Z"
                  fill="#FF7262"
                  stroke="#EBEBEB"
                />
                <path
                  d="M118 48C118 48.552 117.552 49 117 49C116.448 49 116 48.552 116 48C116 47.448 116.448 47 117 47C117.552 47 118 47.448 118 48Z"
                  fill="#EBEBEB"
                />
              </g>
              <path
                d="M128.5 48.5C128.343 48.5 128.194 48.5741 128.1 48.7L127.5 49.5V46.2071L129.793 48.5H128.5Z"
                stroke="white"
                strokeLinejoin="round"
              />
              <path
                d="M185 51L191 45"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <mask id="path-67-inside-1_621_1433" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M203.5 51C205.433 51 207 49.6569 207 48C207 46.3431 205.433 45 203.5 45C201.567 45 200 46.3431 200 48C200 48.8174 200.381 49.5585 201 50.0996V51L201.777 50.6117C202.285 50.8589 202.873 51 203.5 51Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M203.5 51C205.433 51 207 49.6569 207 48C207 46.3431 205.433 45 203.5 45C201.567 45 200 46.3431 200 48C200 48.8174 200.381 49.5585 201 50.0996V51L201.777 50.6117C202.285 50.8589 202.873 51 203.5 51Z"
                fill="white"
              />
              <path
                d="M201 50.0996H202C202 49.8111 201.875 49.5368 201.658 49.3469L201 50.0996ZM201 51H200C200 51.3466 200.179 51.6684 200.474 51.8507C200.769 52.0329 201.137 52.0494 201.447 51.8944L201 51ZM201.777 50.6117L202.214 49.7122C201.934 49.5764 201.607 49.5783 201.329 49.7173L201.777 50.6117ZM206 48C206 48.9655 205.031 50 203.5 50V52C205.835 52 208 50.3482 208 48H206ZM203.5 46C205.031 46 206 47.0345 206 48H208C208 45.6518 205.835 44 203.5 44V46ZM201 48C201 47.0345 201.969 46 203.5 46V44C201.165 44 199 45.6518 199 48H201ZM201.658 49.3469C201.227 48.9693 201 48.4912 201 48H199C199 49.1436 199.536 50.1476 200.342 50.8523L201.658 49.3469ZM202 51V50.0996H200V51H202ZM201.329 49.7173L200.553 50.1056L201.447 51.8944L202.224 51.5061L201.329 49.7173ZM203.5 50C203.023 50 202.585 49.8927 202.214 49.7122L201.34 51.5112C201.986 51.8251 202.723 52 203.5 52V50Z"
                fill="white"
                mask="url(#path-67-inside-1_621_1433)"
              />
              <rect x="114" y="70" width="63" height="46" fill="#B8EAFF" />
              <path
                d="M127.5 89L114 99.0588V116H177V102.196L162.5 96L144.5 101L127.5 89Z"
                fill="#B1FFB9"
              />
              <circle cx="146.5" cy="78.5" r="3.5" fill="#FFFDD3" />
              <rect
                x="142.9"
                y="74.9"
                width="7.2"
                height="7.2"
                stroke="#66D1FF"
                strokeWidth="0.2"
              />
              <rect x="150" y="82" width="1" height="1" fill="white" />
              <rect x="150" y="74" width="1" height="1" fill="white" />
              <rect x="142" y="82" width="1" height="1" fill="white" />
              <rect x="142" y="74" width="1" height="1" fill="white" />
              <path d="M151 83V89L152.5 87H155L151 83Z" fill="#5C5C5C" />
            </g>)
            :
            (<g transform="translate(15,15)">
              <rect width="202" height="121" rx="10" fill="#373737" />
              <rect x="7" y="8" width="165" height="95" fill="#997C63" />
              <rect x="7" y="8" width="165" height="36" fill="#A8D3E5" />
              <rect x="65.3477" y="37.5" width="34.7775" height="25.775" rx="12.8875" stroke="#3D1212" strokeWidth="5" />
              <path d="M81 50.385H83.77" stroke="#E34E26" />
              <path d="M82.3853 51.77V49" stroke="#E34E26" />
              <rect width="39.4725" height="13.1575" rx="2" transform="matrix(-1 0 0 1 102.473 80.165)" fill="#4A0606" />
              <path d="M68.8787 89.3392C69.0857 88.4287 69.8952 87.7825 70.829 87.7825H94.7125C95.6144 87.7825 96.4047 88.3861 96.642 89.2562L99.7061 100.491C100.053 101.764 99.0953 103.017 97.7765 103.017H68.2756C66.9921 103.017 66.0409 101.826 66.3253 100.574L68.8787 89.3392Z" fill="#230000" />
              <rect x="90.0078" y="98.8625" width="12.465" height="3.4625" rx="1.73125" fill="#973131" />
              <rect x="85.1602" y="88.4751" width="12.465" height="1.385" rx="0.6925" fill="#782020" />
              <path d="M86.5449 92.2839C86.5449 91.7102 87.01 91.2451 87.5837 91.2451H97.9712C98.5449 91.2451 99.0099 91.7102 99.0099 92.2839C99.0099 92.8576 98.5449 93.3226 97.9712 93.3226H87.5837C87.01 93.3226 86.5449 92.8576 86.5449 92.2839Z" fill="#702323" />
              <rect x="87.9302" y="94.7075" width="12.465" height="2.77" rx="1.385" fill="#973131" />
              <rect width="12.465" height="3.4625" rx="1.73125" transform="matrix(-1 0 0 1 75.4648 98.8625)" fill="#973131" />
              <path d="M93.2689 64.5502C92.948 64.346 92.5755 64.2375 92.1951 64.2375H72.9543C72.5594 64.2375 72.1734 64.3544 71.8449 64.5734L70.5736 65.421C68.9272 66.5186 69.7042 69.0851 71.683 69.0851H93.5269C95.5278 69.0851 96.2887 66.472 94.6007 65.3977L93.2689 64.5502Z" fill="#823333" />
              <rect width="34.625" height="6.925" rx="2" transform="matrix(-1 0 0 1 99.7026 69.085)" fill="#581717" />
              <rect width="32.5475" height="4.155" rx="2" transform="matrix(-1 0 0 1 98.3174 76.01)" fill="#4A0606" />
              <rect width="12.465" height="1.385" rx="0.6925" transform="matrix(-1 0 0 1 80.3125 88.4751)" fill="#782020" />
              <path d="M78.9277 92.2839C78.9277 91.7102 78.4627 91.2451 77.889 91.2451H67.5015C66.9278 91.2451 66.4627 91.7102 66.4627 92.2839C66.4627 92.8576 66.9278 93.3226 67.5015 93.3226H77.889C78.4627 93.3226 78.9277 92.8576 78.9277 92.2839Z" fill="#702323" />
              <rect width="12.465" height="2.77" rx="1.385" transform="matrix(-1 0 0 1 77.5425 94.7075)" fill="#973131" />
              <rect x="97.625" y="72.5476" width="4.155" height="11.08" rx="2" fill="#903636" />
              <rect x="63.6924" y="72.5476" width="4.155" height="11.08" rx="2" fill="#903636" />
              <rect x="14" y="18" width="28" height="6" rx="2" fill="#717171" />
              <rect x="12" y="12" width="22" height="4" rx="2" fill="#C4C4C4" />
              <rect x="14" y="25" width="28" height="6" rx="2" fill="#717171" />
              <rect x="14" y="32" width="28" height="6" rx="2" fill="#717171" />
              <rect x="15" y="19" width="5" height="4" rx="2" fill="#FBA213" />
              <rect x="15" y="26" width="5" height="4" rx="2" fill="#18BBD3" />
              <rect x="15" y="33" width="5" height="4" rx="2" fill="#84E447" />
              <rect x="140" y="13" width="29" height="21" rx="3" fill="#53BD41" />
              <rect x="151" y="22" width="3" height="3" rx="1.5" fill="#FBA213" />
              <rect x="163" y="29" width="4" height="3" rx="1.5" fill="#C4C4C4" />
              <rect x="160" y="25" width="4" height="3" rx="1.5" fill="#C4C4C4" />
              <rect x="159" y="29" width="3" height="3" rx="1.5" fill="#C4C4C4" />
              <rect x="142" y="15" width="3" height="3" rx="1.5" fill="#C4C4C4" />
              <rect x="142" y="29" width="14" height="3" rx="1.5" fill="#A47B50" />
              <rect x="142" y="26" width="10" height="3" rx="1.5" fill="#A47B50" />
              <rect x="155" y="15" width="6" height="3" rx="1.5" fill="#A47B50" />
              <rect x="7" y="81" width="65" height="22" fill="#0C0C28" fillOpacity="0.34" />
              <rect x="27" y="86" width="16" height="6" rx="2" fill="#717171" />
              <rect x="14" y="96" width="50" height="2" rx="1" fill="#C4C4C4" />
              <rect x="18" y="86" width="7" height="6" rx="2" fill="#C4C4C4" />
              <rect x="62" y="86" width="7" height="6" rx="2" fill="#C4C4C4" />
              <rect x="10" y="86" width="7" height="6" rx="2" fill="#C4C4C4" />
              <rect x="45" y="86" width="16" height="6" rx="2" fill="#717171" />
              <rect x="143" y="28" width="51" height="87.4286" fill="#000202" />
              <path fillRule="evenodd" clipRule="evenodd" d="M163.719 104.652H158.938V109.433H154.156V114.214H168.5V109.433H163.719V104.652Z" fill="#DA6DCF" />
              <path fillRule="evenodd" clipRule="evenodd" d="M173.281 90.3081H168.5V95.0894H163.719V99.8706H178.062V95.0894H173.281V90.3081Z" fill="#DA6DCF" />
              <path fillRule="evenodd" clipRule="evenodd" d="M173.281 104.652H163.719V109.433H173.281V104.652ZM178.062 114.214V109.433H168.5V114.214H178.062Z" fill="#BF3E45" />
              <path fillRule="evenodd" clipRule="evenodd" d="M149.375 104.652H158.938V109.433H149.375V104.652ZM144.594 114.214V109.433H154.156V114.214H144.594Z" fill="#A1D44C" />
              <path fillRule="evenodd" clipRule="evenodd" d="M163.719 95.0894V104.652H158.938V99.8706H154.156V90.3081H158.938V95.0894H163.719Z" fill="#A1D44C" />
              <path fillRule="evenodd" clipRule="evenodd" d="M163.719 85.5269H154.156V90.3081H163.719V85.5269ZM168.5 95.0894V90.3081H158.938V95.0894H168.5Z" fill="#BF3E45" />
              <path fillRule="evenodd" clipRule="evenodd" d="M173.281 109.433H178.062V99.8706H173.281L163.719 99.8706V104.652H173.281V109.433Z" fill="#7461C8" />
              <path fillRule="evenodd" clipRule="evenodd" d="M178.062 99.8706V104.652H187.625V99.8706V90.3081H182.844V99.8706L178.062 99.8706Z" fill="#7461C8" />
              <path fillRule="evenodd" clipRule="evenodd" d="M149.375 109.433H144.594V99.8706H149.375L158.938 99.8706V104.652H149.375V109.433Z" fill="#DD8851" />
              <rect x="178.062" y="104.652" width="9.5625" height="9.5625" fill="#E8D06C" />
              <rect x="144.594" y="90.3081" width="9.5625" height="9.5625" fill="#E8D06C" />
              <path fillRule="evenodd" clipRule="evenodd" d="M173.281 95.0894V85.5269H178.062V90.3081H182.844V99.8706H178.062V95.0894H173.281Z" fill="#A1D44C" />
              <rect x="187.625" y="79.1519" width="19.125" height="4.78125" transform="rotate(-90 187.625 79.1519)" fill="#39F8B1" />
            </g>)
          }
        </g>
      </svg>
    </div>
  );
};

export default Laptop;