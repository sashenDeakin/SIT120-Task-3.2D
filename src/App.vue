<script>
import { RouterLink, RouterView } from "vue-router";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import { auth } from "./firebase/init";
import Footer from "./components/Footer.vue";

export default {
  components: { Signup, Login, Footer },
  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
      displayName: "",
    };
  },
  beforeUpdate() {
    if (auth.currentUser) {
      this.displayName = auth.currentUser.displayName;
    }
  },
};
</script>

<template>
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
  <header>
    <nav>
      <RouterLink to="/"></RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.gradient__bg {
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
}

.gradient__text {
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section__padding {
  padding: 4rem 6rem;
}

.section__margin {
  margin: 4rem 6rem;
}

.scale-up-center {
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@media screen and (max-width: 700px) {
  .section__padding {
    padding: 4rem;
  }

  .section__margin {
    margin: 4rem;
  }
}

@media screen and (max-width: 550px) {
  .section__padding {
    padding: 4rem 2rem;
  }

  .section__margin {
    margin: 4rem 2rem;
  }
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 423px 1297px #fff, 1908px 608px #fff, 1814px 34px #fff,
    965px 11px #fff, 1649px 660px #fff, 1500px 1060px #fff, 973px 582px #fff,
    516px 80px #fff, 1767px 1194px #fff, 19px 669px #fff, 570px 526px #fff,
    1048px 1606px #fff, 1585px 101px #fff, 1880px 1807px #fff, 737px 1907px #fff,
    1732px 1931px #fff, 1960px 94px #fff, 1591px 1716px #fff, 1410px 72px #fff,
    1175px 172px #fff, 1213px 1344px #fff, 1619px 1661px #fff, 1679px 810px #fff,
    1556px 1064px #fff, 730px 1331px #fff, 680px 932px #fff, 70px 855px #fff,
    1213px 1910px #fff, 207px 1336px #fff, 266px 1854px #fff, 1256px 729px #fff,
    148px 722px #fff, 811px 1399px #fff, 1173px 1975px #fff, 516px 1767px #fff,
    1348px 1337px #fff, 1342px 1935px #fff, 1062px 542px #fff,
    1577px 1396px #fff, 396px 811px #fff, 567px 183px #fff, 1517px 943px #fff,
    828px 252px #fff, 1137px 774px #fff, 497px 1253px #fff, 814px 685px #fff,
    1000px 245px #fff, 865px 1057px #fff, 1822px 1925px #fff, 1989px 1566px #fff,
    629px 276px #fff, 812px 1988px #fff, 1734px 657px #fff, 173px 937px #fff,
    739px 1635px #fff, 1983px 1338px #fff, 1591px 1017px #fff, 1310px 41px #fff,
    1046px 1422px #fff, 1250px 1927px #fff, 448px 509px #fff, 1710px 169px #fff,
    1496px 1010px #fff, 1766px 797px #fff, 239px 418px #fff, 1441px 940px #fff,
    1785px 1167px #fff, 1383px 1868px #fff, 61px 1170px #fff, 1567px 565px #fff,
    1882px 225px #fff, 1592px 1989px #fff, 808px 1306px #fff, 113px 1315px #fff,
    1577px 1448px #fff, 204px 1523px #fff, 1829px 1110px #fff, 921px 7px #fff,
    1355px 530px #fff, 559px 46px #fff, 806px 930px #fff, 267px 760px #fff,
    1578px 67px #fff, 458px 479px #fff, 1613px 503px #fff, 1150px 1693px #fff,
    1707px 1901px #fff, 455px 1466px #fff, 469px 1391px #fff, 1900px 7px #fff,
    343px 1148px #fff, 242px 937px #fff, 933px 1522px #fff, 469px 1786px #fff,
    1387px 1034px #fff, 1713px 862px #fff, 1878px 605px #fff, 683px 1143px #fff,
    1201px 205px #fff, 328px 549px #fff, 1680px 287px #fff, 221px 1516px #fff,
    281px 463px #fff, 1376px 1448px #fff, 665px 1506px #fff, 108px 1373px #fff,
    1432px 63px #fff, 1534px 1528px #fff, 198px 1603px #fff, 274px 1608px #fff,
    1197px 821px #fff, 764px 327px #fff, 1760px 969px #fff, 324px 1537px #fff,
    1103px 182px #fff, 1716px 1117px #fff, 387px 201px #fff, 74px 1590px #fff,
    141px 1964px #fff, 1465px 1623px #fff, 1960px 374px #fff, 49px 895px #fff,
    491px 1106px #fff, 894px 1122px #fff, 920px 243px #fff, 1008px 1731px #fff,
    1803px 991px #fff, 693px 1172px #fff, 1443px 1231px #fff, 1630px 800px #fff,
    1134px 661px #fff, 152px 44px #fff, 1396px 135px #fff, 1321px 683px #fff,
    1498px 861px #fff, 413px 953px #fff, 1292px 172px #fff, 292px 638px #fff,
    1831px 152px #fff, 1950px 1960px #fff, 343px 1920px #fff, 682px 1807px #fff,
    1904px 1835px #fff, 1316px 870px #fff, 131px 1328px #fff, 598px 1662px #fff,
    1159px 878px #fff, 459px 1891px #fff, 663px 667px #fff, 1869px 933px #fff,
    1770px 1154px #fff, 820px 100px #fff, 1618px 1397px #fff, 1358px 410px #fff,
    1680px 1434px #fff, 497px 101px #fff, 457px 282px #fff, 1552px 573px #fff,
    1168px 490px #fff, 1998px 344px #fff, 771px 1200px #fff, 961px 1638px #fff,
    895px 677px #fff, 974px 837px #fff, 153px 1711px #fff, 748px 1824px #fff,
    780px 751px #fff, 1802px 1266px #fff, 959px 1448px #fff, 1441px 758px #fff,
    249px 1635px #fff, 1764px 1767px #fff, 1114px 1001px #fff,
    1467px 1393px #fff, 999px 160px #fff, 1702px 567px #fff, 415px 798px #fff,
    1303px 911px #fff, 731px 1667px #fff, 400px 174px #fff, 1017px 1459px #fff,
    894px 67px #fff, 535px 617px #fff, 161px 987px #fff, 238px 1489px #fff,
    977px 1354px #fff, 837px 1067px #fff, 1900px 256px #fff, 1256px 421px #fff,
    1314px 388px #fff, 1875px 850px #fff, 1441px 125px #fff, 1131px 1662px #fff,
    539px 708px #fff, 1379px 1433px #fff, 593px 1276px #fff, 1282px 1602px #fff,
    1472px 144px #fff, 1433px 686px #fff, 1257px 745px #fff, 643px 1700px #fff,
    655px 293px #fff, 1662px 1771px #fff, 251px 216px #fff, 579px 711px #fff,
    1159px 973px #fff, 243px 887px #fff, 1608px 255px #fff, 733px 86px #fff,
    1583px 1985px #fff, 1573px 391px #fff, 840px 1542px #fff, 930px 562px #fff,
    25px 243px #fff, 728px 323px #fff, 1229px 666px #fff, 488px 808px #fff,
    1965px 1951px #fff, 539px 1573px #fff, 863px 506px #fff, 1545px 329px #fff,
    1648px 1965px #fff, 1072px 217px #fff, 1142px 388px #fff, 1061px 1737px #fff,
    147px 713px #fff, 809px 1406px #fff, 996px 701px #fff, 1930px 481px #fff,
    1223px 966px #fff, 1938px 24px #fff, 653px 1537px #fff, 230px 329px #fff,
    461px 1567px #fff, 497px 1592px #fff, 1396px 1315px #fff, 217px 1844px #fff,
    1376px 479px #fff, 235px 1909px #fff, 1180px 1169px #fff, 21px 766px #fff,
    1459px 835px #fff, 377px 387px #fff, 1211px 1598px #fff, 1775px 458px #fff,
    282px 1748px #fff, 580px 1116px #fff, 812px 1913px #fff, 31px 119px #fff,
    271px 1977px #fff, 1309px 931px #fff, 1473px 67px #fff, 402px 1420px #fff,
    1931px 1584px #fff, 1734px 691px #fff, 143px 628px #fff, 535px 28px #fff,
    153px 1647px #fff, 1581px 1138px #fff, 981px 174px #fff, 23px 1441px #fff,
    842px 372px #fff, 783px 1462px #fff, 1910px 1408px #fff, 1120px 1360px #fff,
    1249px 40px #fff, 906px 1890px #fff, 510px 1568px #fff, 342px 454px #fff,
    1442px 1066px #fff, 910px 1229px #fff, 1898px 1975px #fff,
    1683px 1622px #fff, 53px 1641px #fff, 809px 118px #fff, 571px 1216px #fff,
    1495px 1942px #fff, 1398px 157px #fff, 631px 1762px #fff, 1825px 1450px #fff,
    128px 536px #fff, 1617px 1503px #fff, 173px 892px #fff, 1760px 1499px #fff,
    1402px 1573px #fff, 1885px 1643px #fff, 1860px 1970px #fff,
    1477px 786px #fff, 1772px 441px #fff, 360px 564px #fff, 1131px 1491px #fff,
    928px 392px #fff, 1634px 1602px #fff, 1748px 982px #fff, 959px 307px #fff,
    351px 1213px #fff, 676px 556px #fff, 1533px 1410px #fff, 750px 713px #fff,
    4px 62px #fff, 381px 1495px #fff, 1287px 150px #fff, 1927px 1687px #fff,
    169px 323px #fff, 708px 1348px #fff, 1630px 1219px #fff, 1647px 1771px #fff,
    649px 1705px #fff, 1049px 1466px #fff, 1731px 142px #fff, 1003px 918px #fff,
    1867px 1343px #fff, 278px 156px #fff, 1548px 1027px #fff, 845px 1623px #fff,
    610px 652px #fff, 40px 1265px #fff, 583px 223px #fff, 490px 1764px #fff,
    28px 709px #fff, 1795px 1501px #fff, 1796px 312px #fff, 309px 1884px #fff,
    132px 867px #fff, 1146px 1103px #fff, 879px 556px #fff, 1563px 1806px #fff,
    1340px 507px #fff, 966px 1897px #fff, 1872px 940px #fff, 676px 1350px #fff,
    1426px 383px #fff, 1425px 1365px #fff, 267px 787px #fff, 1661px 1296px #fff,
    559px 766px #fff, 748px 1879px #fff, 69px 1766px #fff, 294px 67px #fff,
    991px 239px #fff, 1016px 1433px #fff, 1890px 1613px #fff, 1480px 1828px #fff,
    1342px 489px #fff, 1228px 525px #fff, 563px 264px #fff, 1650px 1705px #fff,
    1001px 828px #fff, 1526px 450px #fff, 1747px 94px #fff, 1444px 1326px #fff,
    1853px 637px #fff, 1356px 1200px #fff, 1816px 1766px #fff, 143px 1112px #fff,
    1115px 996px #fff, 293px 791px #fff, 1505px 1333px #fff, 982px 844px #fff,
    411px 922px #fff, 1490px 802px #fff, 1293px 1653px #fff, 1355px 1823px #fff,
    795px 331px #fff, 1644px 1510px #fff, 679px 1742px #fff, 1663px 1000px #fff,
    1491px 1485px #fff, 6px 1241px #fff, 1931px 816px #fff, 148px 585px #fff,
    873px 1409px #fff, 1639px 1833px #fff, 978px 1367px #fff, 111px 255px #fff,
    754px 420px #fff, 285px 1495px #fff, 184px 664px #fff, 912px 1948px #fff,
    315px 261px #fff, 128px 807px #fff, 1833px 1735px #fff, 41px 1842px #fff,
    582px 391px #fff, 1007px 72px #fff, 1816px 1254px #fff, 1896px 981px #fff,
    1499px 294px #fff, 80px 515px #fff, 96px 186px #fff, 166px 669px #fff,
    489px 1907px #fff, 1594px 1967px #fff, 721px 512px #fff, 630px 1902px #fff,
    1866px 766px #fff, 476px 1353px #fff, 684px 504px #fff, 1675px 984px #fff,
    382px 1074px #fff, 260px 184px #fff, 97px 296px #fff, 7px 82px #fff,
    1918px 1194px #fff, 296px 1851px #fff, 390px 695px #fff, 131px 316px #fff,
    1284px 524px #fff, 1006px 1275px #fff, 102px 1952px #fff, 1686px 833px #fff,
    245px 1551px #fff, 1908px 1499px #fff, 425px 1260px #fff, 280px 434px #fff,
    25px 386px #fff, 631px 661px #fff, 1954px 1723px #fff, 1294px 1362px #fff,
    1099px 1261px #fff, 888px 1741px #fff, 1684px 819px #fff, 1331px 1849px #fff,
    124px 1643px #fff, 1061px 659px #fff, 1827px 1379px #fff, 30px 176px #fff,
    696px 939px #fff, 1183px 1118px #fff, 1849px 83px #fff, 1107px 134px #fff,
    153px 1759px #fff, 270px 1420px #fff, 1526px 558px #fff, 1767px 1948px #fff,
    1680px 156px #fff, 1725px 1717px #fff, 1195px 592px #fff, 383px 966px #fff,
    443px 595px #fff, 269px 851px #fff, 1563px 844px #fff, 230px 528px #fff,
    684px 1371px #fff, 1076px 1523px #fff, 536px 1808px #fff, 275px 38px #fff,
    1458px 951px #fff, 986px 1295px #fff, 156px 2px #fff, 426px 1437px #fff,
    1897px 564px #fff, 1532px 810px #fff, 1688px 1078px #fff, 388px 1394px #fff,
    1425px 1001px #fff, 1364px 154px #fff, 318px 830px #fff, 745px 954px #fff,
    1144px 917px #fff, 1212px 820px #fff, 799px 353px #fff, 176px 1360px #fff,
    203px 140px #fff, 802px 1077px #fff, 710px 1225px #fff, 876px 1674px #fff,
    1316px 102px #fff, 466px 1619px #fff, 1888px 164px #fff, 1038px 990px #fff,
    1332px 1808px #fff, 862px 1408px #fff, 339px 653px #fff, 796px 835px #fff,
    1031px 202px #fff, 64px 1558px #fff, 1792px 241px #fff, 1282px 834px #fff,
    1183px 1456px #fff, 1199px 766px #fff, 628px 752px #fff, 355px 1629px #fff,
    1829px 1871px #fff, 1956px 703px #fff, 612px 1758px #fff, 438px 1113px #fff,
    1429px 283px #fff, 949px 1021px #fff, 746px 1258px #fff, 1396px 556px #fff,
    404px 1448px #fff, 795px 617px #fff, 1817px 790px #fff, 1618px 126px #fff,
    753px 1813px #fff, 1465px 432px #fff, 1472px 1752px #fff, 1428px 496px #fff,
    727px 70px #fff, 1968px 662px #fff, 853px 527px #fff, 1988px 1173px #fff,
    1980px 972px #fff, 1409px 1149px #fff, 147px 520px #fff, 985px 459px #fff,
    910px 177px #fff, 1701px 998px #fff, 769px 293px #fff, 863px 1834px #fff,
    409px 537px #fff, 319px 688px #fff, 1640px 353px #fff, 1326px 1515px #fff,
    1596px 1255px #fff, 219px 426px #fff, 340px 565px #fff, 1835px 1495px #fff,
    1518px 1490px #fff, 632px 1993px #fff, 271px 395px #fff, 452px 1404px #fff,
    903px 925px #fff, 1466px 740px #fff, 451px 455px #fff, 921px 1993px #fff,
    69px 1082px #fff, 788px 1662px #fff, 1345px 332px #fff, 1671px 620px #fff,
    587px 1884px #fff, 391px 1941px #fff, 82px 1235px #fff, 675px 415px #fff,
    1353px 1674px #fff, 784px 1091px #fff, 1214px 1796px #fff, 597px 191px #fff,
    1008px 1701px #fff, 409px 1127px #fff, 1170px 827px #fff, 331px 1017px #fff,
    1890px 1138px #fff, 1943px 98px #fff, 581px 1974px #fff, 786px 1937px #fff,
    785px 520px #fff, 1248px 622px #fff, 539px 328px #fff, 1743px 298px #fff,
    1009px 69px #fff, 1155px 394px #fff, 1062px 480px #fff, 953px 869px #fff,
    38px 1939px #fff, 306px 514px #fff, 600px 1935px #fff, 1428px 391px #fff,
    1015px 1575px #fff, 1611px 1509px #fff, 358px 215px #fff, 1154px 1418px #fff,
    1074px 1671px #fff, 1294px 1673px #fff, 45px 233px #fff, 1479px 1077px #fff,
    1032px 1736px #fff, 1812px 1077px #fff, 1301px 914px #fff, 111px 446px #fff,
    902px 1624px #fff, 48px 753px #fff, 1561px 393px #fff, 1957px 1761px #fff,
    1807px 874px #fff, 470px 1251px #fff, 175px 22px #fff, 824px 908px #fff,
    1562px 145px #fff, 1929px 1790px #fff, 649px 1808px #fff, 968px 1324px #fff,
    194px 702px #fff, 1405px 1240px #fff, 875px 325px #fff, 1482px 1256px #fff,
    1527px 483px #fff, 1272px 1466px #fff, 167px 158px #fff, 1830px 1255px #fff,
    1685px 977px #fff, 1299px 835px #fff, 1885px 1401px #fff, 1580px 1734px #fff,
    274px 628px #fff, 1631px 1886px #fff, 1991px 1806px #fff, 1870px 1610px #fff,
    1155px 1888px #fff, 320px 285px #fff, 578px 45px #fff, 1139px 424px #fff,
    955px 247px #fff, 1142px 1861px #fff, 163px 1316px #fff, 1495px 84px #fff,
    1253px 743px #fff, 501px 936px #fff, 1835px 818px #fff, 350px 1632px #fff,
    726px 549px #fff, 1311px 1570px #fff, 594px 178px #fff, 1442px 723px #fff,
    1960px 1689px #fff, 815px 982px #fff, 656px 253px #fff, 1419px 2px #fff,
    1024px 1823px #fff, 841px 1334px #fff, 480px 1564px #fff, 1846px 1977px #fff,
    1175px 963px #fff, 781px 830px #fff, 675px 1491px #fff, 1894px 265px #fff,
    711px 1014px #fff, 189px 459px #fff, 631px 1879px #fff, 1396px 46px #fff,
    1630px 1029px #fff, 1306px 1098px #fff, 560px 1042px #fff,
    1862px 1166px #fff, 1046px 213px #fff, 1195px 841px #fff, 638px 585px #fff,
    1114px 1778px #fff, 709px 464px #fff, 662px 1535px #fff, 1010px 1615px #fff,
    793px 1947px #fff, 648px 1111px #fff, 438px 873px #fff, 1669px 803px #fff,
    476px 1086px #fff, 1086px 1744px #fff, 1638px 564px #fff, 1720px 1880px #fff,
    1575px 1923px #fff, 153px 94px #fff, 268px 1682px #fff, 775px 712px #fff,
    1511px 1792px #fff, 666px 1193px #fff, 1324px 124px #fff, 1353px 1983px #fff,
    1229px 1168px #fff, 940px 1497px #fff, 1494px 811px #fff, 804px 358px #fff,
    1079px 241px #fff, 21px 592px #fff, 278px 1812px #fff, 1335px 1384px #fff,
    1007px 219px #fff, 150px 924px #fff, 1264px 306px #fff, 1228px 1884px #fff,
    1959px 493px #fff, 1588px 1351px #fff, 28px 1178px #fff, 415px 1533px #fff,
    280px 891px #fff, 37px 1319px #fff, 35px 545px #fff, 651px 149px #fff,
    1969px 1192px #fff, 1355px 1595px #fff, 855px 1680px #fff, 729px 601px #fff,
    1549px 398px #fff, 1347px 1493px #fff, 1550px 417px #fff, 1071px 981px #fff,
    1415px 1120px #fff, 1231px 339px #fff, 260px 1995px #fff, 994px 162px #fff,
    1550px 923px #fff, 1057px 1318px #fff, 1205px 478px #fff, 369px 1031px #fff,
    1500px 1299px #fff, 345px 1928px #fff, 1503px 463px #fff, 1867px 947px #fff,
    552px 39px #fff, 115px 863px #fff;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 423px 1297px #fff, 1908px 608px #fff, 1814px 34px #fff,
    965px 11px #fff, 1649px 660px #fff, 1500px 1060px #fff, 973px 582px #fff,
    516px 80px #fff, 1767px 1194px #fff, 19px 669px #fff, 570px 526px #fff,
    1048px 1606px #fff, 1585px 101px #fff, 1880px 1807px #fff, 737px 1907px #fff,
    1732px 1931px #fff, 1960px 94px #fff, 1591px 1716px #fff, 1410px 72px #fff,
    1175px 172px #fff, 1213px 1344px #fff, 1619px 1661px #fff, 1679px 810px #fff,
    1556px 1064px #fff, 730px 1331px #fff, 680px 932px #fff, 70px 855px #fff,
    1213px 1910px #fff, 207px 1336px #fff, 266px 1854px #fff, 1256px 729px #fff,
    148px 722px #fff, 811px 1399px #fff, 1173px 1975px #fff, 516px 1767px #fff,
    1348px 1337px #fff, 1342px 1935px #fff, 1062px 542px #fff,
    1577px 1396px #fff, 396px 811px #fff, 567px 183px #fff, 1517px 943px #fff,
    828px 252px #fff, 1137px 774px #fff, 497px 1253px #fff, 814px 685px #fff,
    1000px 245px #fff, 865px 1057px #fff, 1822px 1925px #fff, 1989px 1566px #fff,
    629px 276px #fff, 812px 1988px #fff, 1734px 657px #fff, 173px 937px #fff,
    739px 1635px #fff, 1983px 1338px #fff, 1591px 1017px #fff, 1310px 41px #fff,
    1046px 1422px #fff, 1250px 1927px #fff, 448px 509px #fff, 1710px 169px #fff,
    1496px 1010px #fff, 1766px 797px #fff, 239px 418px #fff, 1441px 940px #fff,
    1785px 1167px #fff, 1383px 1868px #fff, 61px 1170px #fff, 1567px 565px #fff,
    1882px 225px #fff, 1592px 1989px #fff, 808px 1306px #fff, 113px 1315px #fff,
    1577px 1448px #fff, 204px 1523px #fff, 1829px 1110px #fff, 921px 7px #fff,
    1355px 530px #fff, 559px 46px #fff, 806px 930px #fff, 267px 760px #fff,
    1578px 67px #fff, 458px 479px #fff, 1613px 503px #fff, 1150px 1693px #fff,
    1707px 1901px #fff, 455px 1466px #fff, 469px 1391px #fff, 1900px 7px #fff,
    343px 1148px #fff, 242px 937px #fff, 933px 1522px #fff, 469px 1786px #fff,
    1387px 1034px #fff, 1713px 862px #fff, 1878px 605px #fff, 683px 1143px #fff,
    1201px 205px #fff, 328px 549px #fff, 1680px 287px #fff, 221px 1516px #fff,
    281px 463px #fff, 1376px 1448px #fff, 665px 1506px #fff, 108px 1373px #fff,
    1432px 63px #fff, 1534px 1528px #fff, 198px 1603px #fff, 274px 1608px #fff,
    1197px 821px #fff, 764px 327px #fff, 1760px 969px #fff, 324px 1537px #fff,
    1103px 182px #fff, 1716px 1117px #fff, 387px 201px #fff, 74px 1590px #fff,
    141px 1964px #fff, 1465px 1623px #fff, 1960px 374px #fff, 49px 895px #fff,
    491px 1106px #fff, 894px 1122px #fff, 920px 243px #fff, 1008px 1731px #fff,
    1803px 991px #fff, 693px 1172px #fff, 1443px 1231px #fff, 1630px 800px #fff,
    1134px 661px #fff, 152px 44px #fff, 1396px 135px #fff, 1321px 683px #fff,
    1498px 861px #fff, 413px 953px #fff, 1292px 172px #fff, 292px 638px #fff,
    1831px 152px #fff, 1950px 1960px #fff, 343px 1920px #fff, 682px 1807px #fff,
    1904px 1835px #fff, 1316px 870px #fff, 131px 1328px #fff, 598px 1662px #fff,
    1159px 878px #fff, 459px 1891px #fff, 663px 667px #fff, 1869px 933px #fff,
    1770px 1154px #fff, 820px 100px #fff, 1618px 1397px #fff, 1358px 410px #fff,
    1680px 1434px #fff, 497px 101px #fff, 457px 282px #fff, 1552px 573px #fff,
    1168px 490px #fff, 1998px 344px #fff, 771px 1200px #fff, 961px 1638px #fff,
    895px 677px #fff, 974px 837px #fff, 153px 1711px #fff, 748px 1824px #fff,
    780px 751px #fff, 1802px 1266px #fff, 959px 1448px #fff, 1441px 758px #fff,
    249px 1635px #fff, 1764px 1767px #fff, 1114px 1001px #fff,
    1467px 1393px #fff, 999px 160px #fff, 1702px 567px #fff, 415px 798px #fff,
    1303px 911px #fff, 731px 1667px #fff, 400px 174px #fff, 1017px 1459px #fff,
    894px 67px #fff, 535px 617px #fff, 161px 987px #fff, 238px 1489px #fff,
    977px 1354px #fff, 837px 1067px #fff, 1900px 256px #fff, 1256px 421px #fff,
    1314px 388px #fff, 1875px 850px #fff, 1441px 125px #fff, 1131px 1662px #fff,
    539px 708px #fff, 1379px 1433px #fff, 593px 1276px #fff, 1282px 1602px #fff,
    1472px 144px #fff, 1433px 686px #fff, 1257px 745px #fff, 643px 1700px #fff,
    655px 293px #fff, 1662px 1771px #fff, 251px 216px #fff, 579px 711px #fff,
    1159px 973px #fff, 243px 887px #fff, 1608px 255px #fff, 733px 86px #fff,
    1583px 1985px #fff, 1573px 391px #fff, 840px 1542px #fff, 930px 562px #fff,
    25px 243px #fff, 728px 323px #fff, 1229px 666px #fff, 488px 808px #fff,
    1965px 1951px #fff, 539px 1573px #fff, 863px 506px #fff, 1545px 329px #fff,
    1648px 1965px #fff, 1072px 217px #fff, 1142px 388px #fff, 1061px 1737px #fff,
    147px 713px #fff, 809px 1406px #fff, 996px 701px #fff, 1930px 481px #fff,
    1223px 966px #fff, 1938px 24px #fff, 653px 1537px #fff, 230px 329px #fff,
    461px 1567px #fff, 497px 1592px #fff, 1396px 1315px #fff, 217px 1844px #fff,
    1376px 479px #fff, 235px 1909px #fff, 1180px 1169px #fff, 21px 766px #fff,
    1459px 835px #fff, 377px 387px #fff, 1211px 1598px #fff, 1775px 458px #fff,
    282px 1748px #fff, 580px 1116px #fff, 812px 1913px #fff, 31px 119px #fff,
    271px 1977px #fff, 1309px 931px #fff, 1473px 67px #fff, 402px 1420px #fff,
    1931px 1584px #fff, 1734px 691px #fff, 143px 628px #fff, 535px 28px #fff,
    153px 1647px #fff, 1581px 1138px #fff, 981px 174px #fff, 23px 1441px #fff,
    842px 372px #fff, 783px 1462px #fff, 1910px 1408px #fff, 1120px 1360px #fff,
    1249px 40px #fff, 906px 1890px #fff, 510px 1568px #fff, 342px 454px #fff,
    1442px 1066px #fff, 910px 1229px #fff, 1898px 1975px #fff,
    1683px 1622px #fff, 53px 1641px #fff, 809px 118px #fff, 571px 1216px #fff,
    1495px 1942px #fff, 1398px 157px #fff, 631px 1762px #fff, 1825px 1450px #fff,
    128px 536px #fff, 1617px 1503px #fff, 173px 892px #fff, 1760px 1499px #fff,
    1402px 1573px #fff, 1885px 1643px #fff, 1860px 1970px #fff,
    1477px 786px #fff, 1772px 441px #fff, 360px 564px #fff, 1131px 1491px #fff,
    928px 392px #fff, 1634px 1602px #fff, 1748px 982px #fff, 959px 307px #fff,
    351px 1213px #fff, 676px 556px #fff, 1533px 1410px #fff, 750px 713px #fff,
    4px 62px #fff, 381px 1495px #fff, 1287px 150px #fff, 1927px 1687px #fff,
    169px 323px #fff, 708px 1348px #fff, 1630px 1219px #fff, 1647px 1771px #fff,
    649px 1705px #fff, 1049px 1466px #fff, 1731px 142px #fff, 1003px 918px #fff,
    1867px 1343px #fff, 278px 156px #fff, 1548px 1027px #fff, 845px 1623px #fff,
    610px 652px #fff, 40px 1265px #fff, 583px 223px #fff, 490px 1764px #fff,
    28px 709px #fff, 1795px 1501px #fff, 1796px 312px #fff, 309px 1884px #fff,
    132px 867px #fff, 1146px 1103px #fff, 879px 556px #fff, 1563px 1806px #fff,
    1340px 507px #fff, 966px 1897px #fff, 1872px 940px #fff, 676px 1350px #fff,
    1426px 383px #fff, 1425px 1365px #fff, 267px 787px #fff, 1661px 1296px #fff,
    559px 766px #fff, 748px 1879px #fff, 69px 1766px #fff, 294px 67px #fff,
    991px 239px #fff, 1016px 1433px #fff, 1890px 1613px #fff, 1480px 1828px #fff,
    1342px 489px #fff, 1228px 525px #fff, 563px 264px #fff, 1650px 1705px #fff,
    1001px 828px #fff, 1526px 450px #fff, 1747px 94px #fff, 1444px 1326px #fff,
    1853px 637px #fff, 1356px 1200px #fff, 1816px 1766px #fff, 143px 1112px #fff,
    1115px 996px #fff, 293px 791px #fff, 1505px 1333px #fff, 982px 844px #fff,
    411px 922px #fff, 1490px 802px #fff, 1293px 1653px #fff, 1355px 1823px #fff,
    795px 331px #fff, 1644px 1510px #fff, 679px 1742px #fff, 1663px 1000px #fff,
    1491px 1485px #fff, 6px 1241px #fff, 1931px 816px #fff, 148px 585px #fff,
    873px 1409px #fff, 1639px 1833px #fff, 978px 1367px #fff, 111px 255px #fff,
    754px 420px #fff, 285px 1495px #fff, 184px 664px #fff, 912px 1948px #fff,
    315px 261px #fff, 128px 807px #fff, 1833px 1735px #fff, 41px 1842px #fff,
    582px 391px #fff, 1007px 72px #fff, 1816px 1254px #fff, 1896px 981px #fff,
    1499px 294px #fff, 80px 515px #fff, 96px 186px #fff, 166px 669px #fff,
    489px 1907px #fff, 1594px 1967px #fff, 721px 512px #fff, 630px 1902px #fff,
    1866px 766px #fff, 476px 1353px #fff, 684px 504px #fff, 1675px 984px #fff,
    382px 1074px #fff, 260px 184px #fff, 97px 296px #fff, 7px 82px #fff,
    1918px 1194px #fff, 296px 1851px #fff, 390px 695px #fff, 131px 316px #fff,
    1284px 524px #fff, 1006px 1275px #fff, 102px 1952px #fff, 1686px 833px #fff,
    245px 1551px #fff, 1908px 1499px #fff, 425px 1260px #fff, 280px 434px #fff,
    25px 386px #fff, 631px 661px #fff, 1954px 1723px #fff, 1294px 1362px #fff,
    1099px 1261px #fff, 888px 1741px #fff, 1684px 819px #fff, 1331px 1849px #fff,
    124px 1643px #fff, 1061px 659px #fff, 1827px 1379px #fff, 30px 176px #fff,
    696px 939px #fff, 1183px 1118px #fff, 1849px 83px #fff, 1107px 134px #fff,
    153px 1759px #fff, 270px 1420px #fff, 1526px 558px #fff, 1767px 1948px #fff,
    1680px 156px #fff, 1725px 1717px #fff, 1195px 592px #fff, 383px 966px #fff,
    443px 595px #fff, 269px 851px #fff, 1563px 844px #fff, 230px 528px #fff,
    684px 1371px #fff, 1076px 1523px #fff, 536px 1808px #fff, 275px 38px #fff,
    1458px 951px #fff, 986px 1295px #fff, 156px 2px #fff, 426px 1437px #fff,
    1897px 564px #fff, 1532px 810px #fff, 1688px 1078px #fff, 388px 1394px #fff,
    1425px 1001px #fff, 1364px 154px #fff, 318px 830px #fff, 745px 954px #fff,
    1144px 917px #fff, 1212px 820px #fff, 799px 353px #fff, 176px 1360px #fff,
    203px 140px #fff, 802px 1077px #fff, 710px 1225px #fff, 876px 1674px #fff,
    1316px 102px #fff, 466px 1619px #fff, 1888px 164px #fff, 1038px 990px #fff,
    1332px 1808px #fff, 862px 1408px #fff, 339px 653px #fff, 796px 835px #fff,
    1031px 202px #fff, 64px 1558px #fff, 1792px 241px #fff, 1282px 834px #fff,
    1183px 1456px #fff, 1199px 766px #fff, 628px 752px #fff, 355px 1629px #fff,
    1829px 1871px #fff, 1956px 703px #fff, 612px 1758px #fff, 438px 1113px #fff,
    1429px 283px #fff, 949px 1021px #fff, 746px 1258px #fff, 1396px 556px #fff,
    404px 1448px #fff, 795px 617px #fff, 1817px 790px #fff, 1618px 126px #fff,
    753px 1813px #fff, 1465px 432px #fff, 1472px 1752px #fff, 1428px 496px #fff,
    727px 70px #fff, 1968px 662px #fff, 853px 527px #fff, 1988px 1173px #fff,
    1980px 972px #fff, 1409px 1149px #fff, 147px 520px #fff, 985px 459px #fff,
    910px 177px #fff, 1701px 998px #fff, 769px 293px #fff, 863px 1834px #fff,
    409px 537px #fff, 319px 688px #fff, 1640px 353px #fff, 1326px 1515px #fff,
    1596px 1255px #fff, 219px 426px #fff, 340px 565px #fff, 1835px 1495px #fff,
    1518px 1490px #fff, 632px 1993px #fff, 271px 395px #fff, 452px 1404px #fff,
    903px 925px #fff, 1466px 740px #fff, 451px 455px #fff, 921px 1993px #fff,
    69px 1082px #fff, 788px 1662px #fff, 1345px 332px #fff, 1671px 620px #fff,
    587px 1884px #fff, 391px 1941px #fff, 82px 1235px #fff, 675px 415px #fff,
    1353px 1674px #fff, 784px 1091px #fff, 1214px 1796px #fff, 597px 191px #fff,
    1008px 1701px #fff, 409px 1127px #fff, 1170px 827px #fff, 331px 1017px #fff,
    1890px 1138px #fff, 1943px 98px #fff, 581px 1974px #fff, 786px 1937px #fff,
    785px 520px #fff, 1248px 622px #fff, 539px 328px #fff, 1743px 298px #fff,
    1009px 69px #fff, 1155px 394px #fff, 1062px 480px #fff, 953px 869px #fff,
    38px 1939px #fff, 306px 514px #fff, 600px 1935px #fff, 1428px 391px #fff,
    1015px 1575px #fff, 1611px 1509px #fff, 358px 215px #fff, 1154px 1418px #fff,
    1074px 1671px #fff, 1294px 1673px #fff, 45px 233px #fff, 1479px 1077px #fff,
    1032px 1736px #fff, 1812px 1077px #fff, 1301px 914px #fff, 111px 446px #fff,
    902px 1624px #fff, 48px 753px #fff, 1561px 393px #fff, 1957px 1761px #fff,
    1807px 874px #fff, 470px 1251px #fff, 175px 22px #fff, 824px 908px #fff,
    1562px 145px #fff, 1929px 1790px #fff, 649px 1808px #fff, 968px 1324px #fff,
    194px 702px #fff, 1405px 1240px #fff, 875px 325px #fff, 1482px 1256px #fff,
    1527px 483px #fff, 1272px 1466px #fff, 167px 158px #fff, 1830px 1255px #fff,
    1685px 977px #fff, 1299px 835px #fff, 1885px 1401px #fff, 1580px 1734px #fff,
    274px 628px #fff, 1631px 1886px #fff, 1991px 1806px #fff, 1870px 1610px #fff,
    1155px 1888px #fff, 320px 285px #fff, 578px 45px #fff, 1139px 424px #fff,
    955px 247px #fff, 1142px 1861px #fff, 163px 1316px #fff, 1495px 84px #fff,
    1253px 743px #fff, 501px 936px #fff, 1835px 818px #fff, 350px 1632px #fff,
    726px 549px #fff, 1311px 1570px #fff, 594px 178px #fff, 1442px 723px #fff,
    1960px 1689px #fff, 815px 982px #fff, 656px 253px #fff, 1419px 2px #fff,
    1024px 1823px #fff, 841px 1334px #fff, 480px 1564px #fff, 1846px 1977px #fff,
    1175px 963px #fff, 781px 830px #fff, 675px 1491px #fff, 1894px 265px #fff,
    711px 1014px #fff, 189px 459px #fff, 631px 1879px #fff, 1396px 46px #fff,
    1630px 1029px #fff, 1306px 1098px #fff, 560px 1042px #fff,
    1862px 1166px #fff, 1046px 213px #fff, 1195px 841px #fff, 638px 585px #fff,
    1114px 1778px #fff, 709px 464px #fff, 662px 1535px #fff, 1010px 1615px #fff,
    793px 1947px #fff, 648px 1111px #fff, 438px 873px #fff, 1669px 803px #fff,
    476px 1086px #fff, 1086px 1744px #fff, 1638px 564px #fff, 1720px 1880px #fff,
    1575px 1923px #fff, 153px 94px #fff, 268px 1682px #fff, 775px 712px #fff,
    1511px 1792px #fff, 666px 1193px #fff, 1324px 124px #fff, 1353px 1983px #fff,
    1229px 1168px #fff, 940px 1497px #fff, 1494px 811px #fff, 804px 358px #fff,
    1079px 241px #fff, 21px 592px #fff, 278px 1812px #fff, 1335px 1384px #fff,
    1007px 219px #fff, 150px 924px #fff, 1264px 306px #fff, 1228px 1884px #fff,
    1959px 493px #fff, 1588px 1351px #fff, 28px 1178px #fff, 415px 1533px #fff,
    280px 891px #fff, 37px 1319px #fff, 35px 545px #fff, 651px 149px #fff,
    1969px 1192px #fff, 1355px 1595px #fff, 855px 1680px #fff, 729px 601px #fff,
    1549px 398px #fff, 1347px 1493px #fff, 1550px 417px #fff, 1071px 981px #fff,
    1415px 1120px #fff, 1231px 339px #fff, 260px 1995px #fff, 994px 162px #fff,
    1550px 923px #fff, 1057px 1318px #fff, 1205px 478px #fff, 369px 1031px #fff,
    1500px 1299px #fff, 345px 1928px #fff, 1503px 463px #fff, 1867px 947px #fff,
    552px 39px #fff, 115px 863px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 567px 1892px #fff, 1010px 1177px #fff, 1708px 295px #fff,
    1509px 1964px #fff, 1556px 374px #fff, 232px 1680px #fff, 983px 1389px #fff,
    450px 436px #fff, 961px 1838px #fff, 24px 1751px #fff, 1296px 1078px #fff,
    22px 1599px #fff, 1043px 1460px #fff, 716px 991px #fff, 656px 65px #fff,
    1470px 1802px #fff, 520px 318px #fff, 251px 1379px #fff, 1410px 1370px #fff,
    275px 1175px #fff, 600px 780px #fff, 1381px 1406px #fff, 1167px 1750px #fff,
    1995px 1538px #fff, 535px 1592px #fff, 713px 1473px #fff, 1674px 901px #fff,
    1431px 1868px #fff, 1710px 525px #fff, 1124px 1382px #fff,
    1362px 1971px #fff, 692px 1273px #fff, 1724px 240px #fff, 1905px 1479px #fff,
    1420px 795px #fff, 1265px 644px #fff, 1245px 817px #fff, 535px 1709px #fff,
    1933px 1868px #fff, 271px 1295px #fff, 1141px 441px #fff, 1685px 512px #fff,
    717px 1733px #fff, 252px 1268px #fff, 165px 1870px #fff, 195px 1859px #fff,
    629px 1571px #fff, 1465px 34px #fff, 1896px 1122px #fff, 520px 5px #fff,
    1494px 1109px #fff, 518px 647px #fff, 693px 266px #fff, 512px 1142px #fff,
    1423px 1739px #fff, 582px 1844px #fff, 430px 1981px #fff, 67px 1064px #fff,
    558px 42px #fff, 6px 1913px #fff, 1841px 616px #fff, 311px 916px #fff,
    245px 222px #fff, 380px 30px #fff, 1572px 861px #fff, 1702px 668px #fff,
    964px 1480px #fff, 1552px 1311px #fff, 200px 1890px #fff, 818px 365px #fff,
    1153px 1810px #fff, 1817px 1915px #fff, 1287px 1210px #fff,
    1204px 803px #fff, 663px 1205px #fff, 347px 1488px #fff, 1327px 1021px #fff,
    446px 1317px #fff, 1709px 394px #fff, 741px 1964px #fff, 1015px 1200px #fff,
    1297px 1609px #fff, 1967px 1161px #fff, 855px 390px #fff, 413px 1637px #fff,
    935px 89px #fff, 1886px 1751px #fff, 525px 989px #fff, 487px 714px #fff,
    566px 1568px #fff, 1784px 1341px #fff, 1177px 705px #fff, 847px 1879px #fff,
    955px 100px #fff, 1347px 1944px #fff, 1655px 1596px #fff, 1695px 1059px #fff,
    236px 1497px #fff, 980px 1984px #fff, 1396px 1352px #fff, 1323px 1963px #fff,
    1408px 22px #fff, 983px 640px #fff, 1710px 923px #fff, 1905px 1941px #fff,
    673px 604px #fff, 706px 1403px #fff, 1128px 1670px #fff, 1296px 826px #fff,
    1422px 768px #fff, 604px 1201px #fff, 133px 1915px #fff, 937px 1149px #fff,
    229px 1407px #fff, 357px 216px #fff, 1260px 1063px #fff, 245px 607px #fff,
    1256px 476px #fff, 1030px 1910px #fff, 1144px 760px #fff, 1152px 1324px #fff,
    1899px 914px #fff, 1972px 1066px #fff, 1448px 997px #fff, 123px 245px #fff,
    384px 96px #fff, 767px 1592px #fff, 519px 107px #fff, 1045px 1441px #fff,
    974px 1344px #fff, 239px 357px #fff, 354px 1355px #fff, 1351px 768px #fff,
    1325px 1001px #fff, 309px 402px #fff, 1628px 1477px #fff, 146px 1967px #fff,
    999px 1520px #fff, 1198px 1567px #fff, 312px 689px #fff, 705px 829px #fff,
    1402px 32px #fff, 720px 1030px #fff, 192px 1962px #fff, 1787px 1415px #fff,
    1252px 1839px #fff, 1161px 584px #fff, 177px 1423px #fff, 1288px 823px #fff,
    1659px 1607px #fff, 1783px 279px #fff, 58px 1103px #fff, 1273px 158px #fff,
    325px 317px #fff, 1752px 1513px #fff, 1808px 300px #fff, 1831px 1043px #fff,
    429px 1177px #fff, 628px 1890px #fff, 849px 1799px #fff, 971px 1859px #fff,
    1592px 1234px #fff, 464px 788px #fff, 949px 823px #fff, 1833px 357px #fff,
    1409px 1554px #fff, 1226px 399px #fff, 728px 1032px #fff, 722px 1155px #fff,
    1310px 1315px #fff, 163px 74px #fff, 1523px 833px #fff, 1903px 1247px #fff,
    3px 1717px #fff, 326px 1537px #fff, 883px 943px #fff, 149px 1471px #fff,
    1302px 1351px #fff, 1709px 83px #fff, 1059px 181px #fff, 1302px 1780px #fff,
    1577px 51px #fff, 1938px 803px #fff, 532px 753px #fff, 1722px 1963px #fff,
    368px 1811px #fff, 18px 1056px #fff, 1753px 1906px #fff, 1570px 1803px #fff,
    619px 1144px #fff, 1321px 901px #fff, 195px 918px #fff, 895px 557px #fff,
    586px 1485px #fff, 1069px 1363px #fff, 202px 1077px #fff, 346px 110px #fff,
    692px 943px #fff, 1926px 164px #fff, 1909px 198px #fff;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 567px 1892px #fff, 1010px 1177px #fff, 1708px 295px #fff,
    1509px 1964px #fff, 1556px 374px #fff, 232px 1680px #fff, 983px 1389px #fff,
    450px 436px #fff, 961px 1838px #fff, 24px 1751px #fff, 1296px 1078px #fff,
    22px 1599px #fff, 1043px 1460px #fff, 716px 991px #fff, 656px 65px #fff,
    1470px 1802px #fff, 520px 318px #fff, 251px 1379px #fff, 1410px 1370px #fff,
    275px 1175px #fff, 600px 780px #fff, 1381px 1406px #fff, 1167px 1750px #fff,
    1995px 1538px #fff, 535px 1592px #fff, 713px 1473px #fff, 1674px 901px #fff,
    1431px 1868px #fff, 1710px 525px #fff, 1124px 1382px #fff,
    1362px 1971px #fff, 692px 1273px #fff, 1724px 240px #fff, 1905px 1479px #fff,
    1420px 795px #fff, 1265px 644px #fff, 1245px 817px #fff, 535px 1709px #fff,
    1933px 1868px #fff, 271px 1295px #fff, 1141px 441px #fff, 1685px 512px #fff,
    717px 1733px #fff, 252px 1268px #fff, 165px 1870px #fff, 195px 1859px #fff,
    629px 1571px #fff, 1465px 34px #fff, 1896px 1122px #fff, 520px 5px #fff,
    1494px 1109px #fff, 518px 647px #fff, 693px 266px #fff, 512px 1142px #fff,
    1423px 1739px #fff, 582px 1844px #fff, 430px 1981px #fff, 67px 1064px #fff,
    558px 42px #fff, 6px 1913px #fff, 1841px 616px #fff, 311px 916px #fff,
    245px 222px #fff, 380px 30px #fff, 1572px 861px #fff, 1702px 668px #fff,
    964px 1480px #fff, 1552px 1311px #fff, 200px 1890px #fff, 818px 365px #fff,
    1153px 1810px #fff, 1817px 1915px #fff, 1287px 1210px #fff,
    1204px 803px #fff, 663px 1205px #fff, 347px 1488px #fff, 1327px 1021px #fff,
    446px 1317px #fff, 1709px 394px #fff, 741px 1964px #fff, 1015px 1200px #fff,
    1297px 1609px #fff, 1967px 1161px #fff, 855px 390px #fff, 413px 1637px #fff,
    935px 89px #fff, 1886px 1751px #fff, 525px 989px #fff, 487px 714px #fff,
    566px 1568px #fff, 1784px 1341px #fff, 1177px 705px #fff, 847px 1879px #fff,
    955px 100px #fff, 1347px 1944px #fff, 1655px 1596px #fff, 1695px 1059px #fff,
    236px 1497px #fff, 980px 1984px #fff, 1396px 1352px #fff, 1323px 1963px #fff,
    1408px 22px #fff, 983px 640px #fff, 1710px 923px #fff, 1905px 1941px #fff,
    673px 604px #fff, 706px 1403px #fff, 1128px 1670px #fff, 1296px 826px #fff,
    1422px 768px #fff, 604px 1201px #fff, 133px 1915px #fff, 937px 1149px #fff,
    229px 1407px #fff, 357px 216px #fff, 1260px 1063px #fff, 245px 607px #fff,
    1256px 476px #fff, 1030px 1910px #fff, 1144px 760px #fff, 1152px 1324px #fff,
    1899px 914px #fff, 1972px 1066px #fff, 1448px 997px #fff, 123px 245px #fff,
    384px 96px #fff, 767px 1592px #fff, 519px 107px #fff, 1045px 1441px #fff,
    974px 1344px #fff, 239px 357px #fff, 354px 1355px #fff, 1351px 768px #fff,
    1325px 1001px #fff, 309px 402px #fff, 1628px 1477px #fff, 146px 1967px #fff,
    999px 1520px #fff, 1198px 1567px #fff, 312px 689px #fff, 705px 829px #fff,
    1402px 32px #fff, 720px 1030px #fff, 192px 1962px #fff, 1787px 1415px #fff,
    1252px 1839px #fff, 1161px 584px #fff, 177px 1423px #fff, 1288px 823px #fff,
    1659px 1607px #fff, 1783px 279px #fff, 58px 1103px #fff, 1273px 158px #fff,
    325px 317px #fff, 1752px 1513px #fff, 1808px 300px #fff, 1831px 1043px #fff,
    429px 1177px #fff, 628px 1890px #fff, 849px 1799px #fff, 971px 1859px #fff,
    1592px 1234px #fff, 464px 788px #fff, 949px 823px #fff, 1833px 357px #fff,
    1409px 1554px #fff, 1226px 399px #fff, 728px 1032px #fff, 722px 1155px #fff,
    1310px 1315px #fff, 163px 74px #fff, 1523px 833px #fff, 1903px 1247px #fff,
    3px 1717px #fff, 326px 1537px #fff, 883px 943px #fff, 149px 1471px #fff,
    1302px 1351px #fff, 1709px 83px #fff, 1059px 181px #fff, 1302px 1780px #fff,
    1577px 51px #fff, 1938px 803px #fff, 532px 753px #fff, 1722px 1963px #fff,
    368px 1811px #fff, 18px 1056px #fff, 1753px 1906px #fff, 1570px 1803px #fff,
    619px 1144px #fff, 1321px 901px #fff, 195px 918px #fff, 895px 557px #fff,
    586px 1485px #fff, 1069px 1363px #fff, 202px 1077px #fff, 346px 110px #fff,
    692px 943px #fff, 1926px 164px #fff, 1909px 198px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 955px 980px #fff, 1909px 68px #fff, 1804px 967px #fff,
    545px 797px #fff, 1814px 1324px #fff, 34px 1848px #fff, 741px 188px #fff,
    600px 1693px #fff, 152px 1659px #fff, 272px 1076px #fff, 695px 1045px #fff,
    890px 785px #fff, 1707px 528px #fff, 1753px 1210px #fff, 517px 9px #fff,
    507px 1316px #fff, 394px 422px #fff, 702px 1222px #fff, 1205px 1486px #fff,
    560px 4px #fff, 501px 640px #fff, 1191px 668px #fff, 1362px 1661px #fff,
    950px 419px #fff, 1938px 335px #fff, 1539px 1160px #fff, 560px 1867px #fff,
    381px 1364px #fff, 1305px 1362px #fff, 633px 483px #fff, 64px 1776px #fff,
    1376px 876px #fff, 240px 1462px #fff, 827px 919px #fff, 270px 827px #fff,
    1750px 301px #fff, 385px 1315px #fff, 105px 17px #fff, 1926px 1579px #fff,
    1357px 1326px #fff, 1641px 1112px #fff, 1397px 229px #fff, 577px 1590px #fff,
    1629px 713px #fff, 342px 1527px #fff, 1316px 664px #fff, 242px 1650px #fff,
    1938px 1496px #fff, 573px 1385px #fff, 1072px 1954px #fff, 228px 1990px #fff,
    1838px 1354px #fff, 1034px 1438px #fff, 1158px 1863px #fff,
    677px 1743px #fff, 945px 84px #fff, 1127px 1119px #fff, 1033px 159px #fff,
    1185px 1565px #fff, 97px 298px #fff, 1021px 1656px #fff, 1771px 895px #fff,
    1177px 1687px #fff, 1912px 1988px #fff, 1183px 1513px #fff,
    1383px 644px #fff, 1820px 1465px #fff, 1852px 121px #fff, 1956px 1444px #fff,
    278px 1114px #fff, 222px 1193px #fff, 1999px 927px #fff, 1318px 1825px #fff,
    587px 1401px #fff, 468px 1933px #fff, 229px 1794px #fff, 570px 1824px #fff,
    1451px 771px #fff, 1924px 484px #fff, 1661px 1765px #fff, 1667px 9px #fff,
    606px 1750px #fff, 224px 1372px #fff, 1447px 54px #fff, 1236px 999px #fff,
    681px 1244px #fff, 565px 240px #fff, 1368px 64px #fff, 54px 999px #fff,
    649px 843px #fff, 1029px 1356px #fff, 622px 1643px #fff, 1463px 1804px #fff,
    1898px 1874px #fff, 914px 865px #fff, 1629px 1912px #fff, 1592px 671px #fff,
    619px 162px #fff, 1791px 1638px #fff, 1545px 411px #fff;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 955px 980px #fff, 1909px 68px #fff, 1804px 967px #fff,
    545px 797px #fff, 1814px 1324px #fff, 34px 1848px #fff, 741px 188px #fff,
    600px 1693px #fff, 152px 1659px #fff, 272px 1076px #fff, 695px 1045px #fff,
    890px 785px #fff, 1707px 528px #fff, 1753px 1210px #fff, 517px 9px #fff,
    507px 1316px #fff, 394px 422px #fff, 702px 1222px #fff, 1205px 1486px #fff,
    560px 4px #fff, 501px 640px #fff, 1191px 668px #fff, 1362px 1661px #fff,
    950px 419px #fff, 1938px 335px #fff, 1539px 1160px #fff, 560px 1867px #fff,
    381px 1364px #fff, 1305px 1362px #fff, 633px 483px #fff, 64px 1776px #fff,
    1376px 876px #fff, 240px 1462px #fff, 827px 919px #fff, 270px 827px #fff,
    1750px 301px #fff, 385px 1315px #fff, 105px 17px #fff, 1926px 1579px #fff,
    1357px 1326px #fff, 1641px 1112px #fff, 1397px 229px #fff, 577px 1590px #fff,
    1629px 713px #fff, 342px 1527px #fff, 1316px 664px #fff, 242px 1650px #fff,
    1938px 1496px #fff, 573px 1385px #fff, 1072px 1954px #fff, 228px 1990px #fff,
    1838px 1354px #fff, 1034px 1438px #fff, 1158px 1863px #fff,
    677px 1743px #fff, 945px 84px #fff, 1127px 1119px #fff, 1033px 159px #fff,
    1185px 1565px #fff, 97px 298px #fff, 1021px 1656px #fff, 1771px 895px #fff,
    1177px 1687px #fff, 1912px 1988px #fff, 1183px 1513px #fff,
    1383px 644px #fff, 1820px 1465px #fff, 1852px 121px #fff, 1956px 1444px #fff,
    278px 1114px #fff, 222px 1193px #fff, 1999px 927px #fff, 1318px 1825px #fff,
    587px 1401px #fff, 468px 1933px #fff, 229px 1794px #fff, 570px 1824px #fff,
    1451px 771px #fff, 1924px 484px #fff, 1661px 1765px #fff, 1667px 9px #fff,
    606px 1750px #fff, 224px 1372px #fff, 1447px 54px #fff, 1236px 999px #fff,
    681px 1244px #fff, 565px 240px #fff, 1368px 64px #fff, 54px 999px #fff,
    649px 843px #fff, 1029px 1356px #fff, 622px 1643px #fff, 1463px 1804px #fff,
    1898px 1874px #fff, 914px 865px #fff, 1629px 1912px #fff, 1592px 671px #fff,
    619px 162px #fff, 1791px 1638px #fff, 1545px 411px #fff;
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
