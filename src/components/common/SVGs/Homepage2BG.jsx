import React, { useState, useContext } from 'react'
import { ThemeContext } from '../../../App'

const Homepage2BG = () => {
    // const [color, setcolor] = useState("")
    const theme = useContext(ThemeContext)
    return (
        <div style={{opacity: 0.6}}>
            {/* <div style={{
                position: "absolute", height: "100%", width: "100%", opacity: .1,
                //  background: theme.theme === "dark" ?
                    // "linear-gradient(rgba(21, 21,21, .5), rgba(21,21,21, .6)" :
                    // "linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .6)", 
                    }}> */}
            {/* </div > */}
        <svg style={{position: "absolute", left: 0 , top: 0, objectFit: "contain",}}viewBox="0 0 1536 720" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1516_127)">
                <ellipse cx="764.5" cy="660.5" rx="20.5" ry="21.5" fill="#14B25F" />
                <ellipse cx="1286.5" cy="720" rx="30.5" ry="30" fill="#F74037" />
                <ellipse cx="1210" cy="22.5" rx="35" ry="34.5" fill="#4A90F4" />
                <ellipse cx="1285.5" cy="703" rx="87.5" ry="92" stroke="#B3D0FA" stroke-width="35" />
                <ellipse cx="1465.5" cy="244.5" rx="103.5" ry="102.5" fill="#0F9D58" fill-opacity="0.5" />
                <ellipse cx="1559.5" cy="470" rx="74.5" ry="70" stroke="#4285F4" stroke-width="35" />
                <ellipse cx="334" cy="701.5" rx="64" ry="63.5" stroke="#14B25F" stroke-width="20" />
                <circle cx="1502" cy="373" r="126.5" stroke="#F44A4A" stroke-width="5" stroke-dasharray="18 18" />
                <circle cx="192" cy="86" r="82.5" stroke="#FFB808" stroke-width="5" stroke-dasharray="18 18" />
                <path d="M1314.19 619.862C1315.43 626.073 1316.27 632.426 1316.69 638.893L1314.19 639.055C1314.4 642.177 1314.5 645.326 1314.5 648.5C1314.5 651.674 1314.4 654.823 1314.19 657.945L1316.69 658.107C1316.27 664.574 1315.43 670.927 1314.19 677.138L1311.74 676.65C1310.5 682.879 1308.86 688.962 1306.84 694.873L1309.21 695.68C1307.13 701.777 1304.66 707.693 1301.83 713.398L1299.59 712.286C1296.78 717.944 1293.61 723.391 1290.1 728.598L1292.18 729.993C1288.59 735.315 1284.67 740.391 1280.44 745.188L1278.57 743.534C1274.4 748.255 1269.93 752.702 1265.19 756.845L1266.83 758.728C1262.02 762.934 1256.92 766.831 1251.58 770.388L1250.19 768.308C1244.97 771.786 1239.51 774.934 1233.84 777.722L1234.94 779.965C1229.23 782.774 1223.3 785.225 1217.2 787.286L1216.4 784.917C1210.48 786.915 1204.39 788.541 1198.16 789.768L1198.64 792.221C1192.43 793.444 1186.07 794.276 1179.61 794.692L1179.45 792.197C1176.32 792.398 1173.17 792.5 1170 792.5C1166.83 792.5 1163.68 792.398 1160.55 792.197L1160.39 794.692C1153.93 794.276 1147.57 793.444 1141.36 792.221L1141.84 789.768C1135.61 788.541 1129.52 786.915 1123.6 784.917L1122.8 787.286C1116.7 785.225 1110.77 782.774 1105.06 779.965L1106.16 777.722C1100.49 774.934 1095.03 771.786 1089.81 768.308L1088.42 770.388C1083.08 766.831 1077.98 762.934 1073.17 758.728L1074.81 756.845C1070.07 752.702 1065.6 748.255 1061.43 743.534L1059.56 745.188C1055.33 740.391 1051.41 735.316 1047.82 729.993L1049.9 728.598C1046.39 723.391 1043.22 717.944 1040.41 712.286L1038.17 713.398C1035.34 707.693 1032.87 701.777 1030.79 695.68L1033.16 694.873C1031.14 688.962 1029.5 682.879 1028.26 676.65L1025.81 677.138C1024.57 670.927 1023.73 664.574 1023.31 658.107L1025.81 657.945C1025.6 654.823 1025.5 651.674 1025.5 648.5C1025.5 645.326 1025.6 642.177 1025.81 639.055L1023.31 638.893C1023.73 632.426 1024.57 626.073 1025.81 619.862L1028.26 620.35C1029.5 614.121 1031.14 608.038 1033.16 602.127L1030.79 601.32C1032.87 595.223 1035.34 589.307 1038.17 583.602L1040.41 584.714C1043.22 579.056 1046.39 573.609 1049.9 568.402L1047.82 567.007C1051.41 561.685 1055.33 556.609 1059.56 551.812L1061.43 553.466C1065.6 548.745 1070.07 544.298 1074.81 540.155L1073.17 538.272C1077.98 534.066 1083.08 530.169 1088.42 526.612L1089.81 528.692C1095.03 525.214 1100.49 522.066 1106.16 519.278L1105.06 517.035C1110.77 514.226 1116.7 511.775 1122.8 509.714L1123.6 512.083C1129.52 510.085 1135.61 508.459 1141.84 507.232L1141.36 504.779C1147.57 503.556 1153.93 502.724 1160.39 502.308L1160.55 504.803C1163.68 504.602 1166.83 504.5 1170 504.5C1173.17 504.5 1176.32 504.602 1179.45 504.803L1179.61 502.308C1186.07 502.724 1192.43 503.556 1198.64 504.779L1198.16 507.232C1204.39 508.459 1210.48 510.085 1216.4 512.083L1217.2 509.714C1223.3 511.775 1229.23 514.226 1234.94 517.035L1233.84 519.278C1239.51 522.066 1244.97 525.214 1250.19 528.692L1251.58 526.612C1256.92 530.169 1262.02 534.066 1266.83 538.272L1265.19 540.155C1269.93 544.298 1274.4 548.745 1278.57 553.466L1280.44 551.812C1284.67 556.609 1288.59 561.684 1292.18 567.007L1290.1 568.402C1293.61 573.609 1296.78 579.056 1299.59 584.714L1301.83 583.602C1304.66 589.307 1307.13 595.223 1309.21 601.32L1306.84 602.127C1308.86 608.038 1310.5 614.121 1311.74 620.35L1314.19 619.862Z" stroke="#F44A4A" stroke-width="5" stroke-dasharray="18 18" />
                <circle cx="1455" cy="144" r="30" fill="#EA4335" />
                <ellipse cx="485.5" cy="255.5" rx="19.5" ry="17.5" fill="#FFB808" fill-opacity="0.47" />
                <ellipse cx="1091.5" cy="426.5" rx="11.5" ry="12.5" fill="#4A90F4" fill-opacity="0.42" />
                <circle cx="491" cy="259" r="9" fill="#FFB808" />
                {/* <ellipse cx="807" cy="207" rx="40" ry="38" fill="#14B25F" /> */}
                <rect x="1074.45" y="-64.2402" width="47.024" height="984.515" transform="rotate(-26.5 1074.45 -64.2402)" fill="#FFB808" />
                <rect x="-4.5769" y="291" width="167.726" height="59.0465" fill="#F74037" />
                <rect x="-4.5769" y="350.046" width="59.0465" height="59.0465" fill="#14B25F" />
                <rect x="-4.5769" y="409.093" width="123.227" height="59.0465" fill="#FFB808" />
                <rect x="-5" y="467.953" width="59" height="55" fill="#4A90F4" />
                <rect x="-4.5769" y="522.906" width="103.545" height="59.0465" fill="#F74037" fill-opacity="0.75" />
                <rect y="232" width="106.968" height="59.0465" fill="#B3D0FA" />
                <circle cx="4.5" cy="154.5" r="30.5" fill="#14B25F" />
                <circle cx="50.5" cy="386.5" r="350" stroke="#F74037" stroke-width="40" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M629.386 561.184C625.309 558.782 620.018 560.134 617.96 564.394C594.22 613.53 613.215 673.503 661.537 701.967C709.859 730.431 771.522 717.968 802.987 673.384C805.716 669.518 804.333 664.235 800.256 661.833V661.833C796.179 659.432 790.96 660.823 788.166 664.642C761.756 700.736 710.776 711.084 670.234 687.203C629.692 663.321 614.026 613.716 632.791 573.12C634.777 568.825 633.463 563.585 629.386 561.184V561.184Z" fill="#FFB808" />
                {/* <line x1="799.565" y1="185.247" x2="687.565" y2="-11.7529" stroke="black" /> */}
                {/* <path d="M1374.02 674.442C1375.76 680.091 1376.96 685.973 1377.56 692.029L1375.07 692.275C1375.35 695.144 1375.5 698.055 1375.5 701C1375.5 703.945 1375.35 706.856 1375.07 709.725L1377.56 709.971C1376.96 716.027 1375.76 721.909 1374.02 727.558L1371.63 726.822C1369.9 732.435 1367.62 737.812 1364.86 742.892L1367.05 744.087C1364.18 749.366 1360.79 754.331 1356.96 758.919L1355.04 757.317C1351.31 761.786 1347.14 765.887 1342.6 769.557L1344.17 771.501C1339.54 775.25 1334.52 778.561 1329.19 781.368L1328.03 779.156C1322.92 781.849 1317.51 784.067 1311.87 785.748L1312.58 788.144C1306.92 789.83 1301.03 790.992 1294.97 791.573L1294.73 789.084C1291.86 789.359 1288.95 789.5 1286 789.5C1283.05 789.5 1280.14 789.359 1277.27 789.084L1277.03 791.573C1270.97 790.992 1265.08 789.83 1259.42 788.144L1260.13 785.748C1254.49 784.067 1249.08 781.849 1243.97 779.156L1242.81 781.368C1237.48 778.561 1232.46 775.25 1227.83 771.501L1229.4 769.557C1224.86 765.887 1220.69 761.786 1216.96 757.317L1215.04 758.919C1211.21 754.331 1207.82 749.366 1204.95 744.087L1207.14 742.892C1204.38 737.812 1202.1 732.435 1200.37 726.822L1197.98 727.558C1196.24 721.909 1195.04 716.027 1194.44 709.971L1196.93 709.725C1196.65 706.856 1196.5 703.945 1196.5 701C1196.5 698.055 1196.65 695.144 1196.93 692.275L1194.44 692.029C1195.04 685.973 1196.24 680.091 1197.98 674.442L1200.37 675.178C1202.1 669.565 1204.38 664.188 1207.14 659.108L1204.95 657.913C1207.82 652.634 1211.21 647.669 1215.04 643.081L1216.96 644.683C1220.69 640.214 1224.86 636.113 1229.4 632.443L1227.83 630.499C1232.46 626.75 1237.48 623.439 1242.81 620.632L1243.97 622.844C1249.08 620.151 1254.49 617.933 1260.13 616.252L1259.42 613.856C1265.08 612.17 1270.97 611.008 1277.03 610.427L1277.27 612.916C1280.14 612.641 1283.05 612.5 1286 612.5C1288.95 612.5 1291.86 612.641 1294.73 612.916L1294.97 610.427C1301.03 611.008 1306.92 612.17 1312.58 613.856L1311.87 616.252C1317.51 617.933 1322.92 620.151 1328.03 622.844L1329.19 620.632C1334.52 623.439 1339.54 626.75 1344.17 630.499L1342.6 632.443C1347.14 636.113 1351.31 640.214 1355.04 644.683L1356.96 643.081C1360.79 647.669 1364.18 652.634 1367.05 657.913L1364.86 659.108C1367.62 664.188 1369.9 669.565 1371.63 675.178L1374.02 674.442Z" stroke="#4A90F4" stroke-width="5" stroke-dasharray="18 18" /> */}
            </g>
            <defs>
                <clipPath id="clip0_1516_127">
                    <rect width="1536" height="720" fill="white" />
                </clipPath>
            </defs>
        </svg>
        </div>
    )
}

export default Homepage2BG