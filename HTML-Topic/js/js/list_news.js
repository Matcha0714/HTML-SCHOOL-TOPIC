$(function(){
    var news = [['[新聞] 端午連假首日 7處兒童疫苗接種站施打7802', 'https://www.ptt.cc/bbs/nCoV2019/M.1654262326.A.174.html'], ['[新聞] 外國商務客入境檢疫鬆綁有譜 經部：6月下', 'https://www.ptt.cc/bbs/nCoV2019/M.1654262484.A.0C0.html'], ['[新聞] 國研院疫情地圖 一眼掌握各縣市現況', 'https://www.ptt.cc/bbs/nCoV2019/M.1654320666.A.2DA.html'], ['[新聞] 新增68,151例COVID-19確定病例，分別為68,118例本土及33例', 'https://www.ptt.cc/bbs/nCoV2019/M.1654322596.A.B3B.html'], ['[新聞] 北韓確診逼近400萬 主動詢問世衛變異株', 'https://www.ptt.cc/bbs/nCoV2019/M.1654343686.A.D68.html'], ['[新聞] 把握機會 7大兒童疫苗接種站5日最後一天', 'https://www.ptt.cc/bbs/nCoV2019/M.1654344197.A.8FA.html'], ['[新聞] 北京累計1812例 官員：疫情進入掃尾階段', 'https://www.ptt.cc/bbs/nCoV2019/M.1654344745.A.10D.html'], ['[新聞] 專家籲縮兒童疫苗接種間隔 指揮中心6月', 'https://www.ptt.cc/bbs/nCoV2019/M.1654348748.A.CB2.html'], ['[新聞] 疾管署官網出包誤植數據 新冠死亡數暴衝', 'https://www.ptt.cc/bbs/nCoV2019/M.1654348818.A.037.html'], ['[新聞] 疫情高峰南移 台南專責病床空床率僅15%', 'https://www.ptt.cc/bbs/nCoV2019/M.1654348930.A.97E.html'], ['[新聞] 本土+68118／152例死亡創新高 中南部疫', 'https://www.ptt.cc/bbs/nCoV2019/M.1654349158.A.59B.html'], ['[新聞] 中央擬縮短入境居隔天數 醫師籲兒童第二', 'https://www.ptt.cc/bbs/nCoV2019/M.1654349317.A.83F.html'], ['[新聞] 金門醫療量能足 國高中6日快篩陰始能入校', 'https://www.ptt.cc/bbs/nCoV2019/M.1654352433.A.442.html'], ['[新聞] 莊人祥：疫情北降南升 估中南部一週內達高', 'https://www.ptt.cc/bbs/nCoV2019/M.1654356298.A.649.html'], ['[新聞] 若單日確診10萬人 陳時中：疫情差不多達高', 'https://www.ptt.cc/bbs/nCoV2019/M.1654356567.A.563.html'], ['[新聞] 訪視彰基醫院 總統：持續提升兒童疫苗覆蓋', 'https://www.ptt.cc/bbs/nCoV2019/M.1654356985.A.DDA.html'], ['[新聞] 日本重新開放觀光客入境 防新變異株流入成重點', 'https://www.ptt.cc/bbs/nCoV2019/M.1654406117.A.79C.html'], ['[新聞] 新增62,110例COVID-19確定病例，分別為62,080例本土及30例', 'https://www.ptt.cc/bbs/nCoV2019/M.1654409273.A.43E.html'], ['[新聞] 北韓稱疫情緩和 WHO憂實情恐怕更嚴峻', 'https://www.ptt.cc/bbs/nCoV2019/M.1654176458.A.75F.html'], ['[新聞] 何時脫離高原期？李秉穎：染疫率20%機會', 'https://www.ptt.cc/bbs/nCoV2019/M.1654177125.A.F3C.html'], ['[新聞] 端午節連假 台東快篩陽遠距判讀不打烊', 'https://www.ptt.cc/bbs/nCoV2019/M.1654181178.A.C10.html'], ['[新聞] 香港新增確診升高 官方懷疑有人虛報', 'https://www.ptt.cc/bbs/nCoV2019/M.1654181578.A.718.html'], ['[新聞] 日本東京新增2335例 連20天低於上週同日', 'https://www.ptt.cc/bbs/nCoV2019/M.1654182583.A.359.html'], ['[新聞] Omicron新亞變種肆虐 葡萄牙確診人數遽增', 'https://www.ptt.cc/bbs/nCoV2019/M.1654218763.A.F6C.html'], ['[新聞] 新增76,564例COVID-19確定病例，分別為76', 'https://www.ptt.cc/bbs/nCoV2019/M.1654236099.A.EC4.html'], ['[新聞] 8日起沒打疫苗入境韓國免隔離 PCR須為陰性', 'https://www.ptt.cc/bbs/nCoV2019/M.1654242201.A.989.html'], ['[新聞] 輝瑞5歲以下兒童COVID-19疫苗 已向美遞批', 'https://www.ptt.cc/bbs/nCoV2019/M.1654245274.A.291.html'], ['[新聞] 感染Omicron 專家：長新冠比例較其他變異', 'https://www.ptt.cc/bbs/nCoV2019/M.1654245469.A.AE1.html'], ['[新聞] 首劑疫苗涵蓋率逼近90% 快篩實名制賣破千', 'https://www.ptt.cc/bbs/nCoV2019/M.1654246075.A.F06.html'], ['[新聞] 男確診解隔快篩陰重返職場 出現2次感染', 'https://www.ptt.cc/bbs/nCoV2019/M.1654247918.A.140.html'], ['[新聞] 莊人祥透露邊境鬆綁3方向 觀光旅遊暫不開', 'https://www.ptt.cc/bbs/nCoV2019/M.1654257251.A.710.html'], ['[新聞] 機組員盼縮居檢或改篩代隔 王國材：指揮中', 'https://www.ptt.cc/bbs/nCoV2019/M.1654257601.A.6E9.html'], ['[新聞] 視察兒童疫苗大型接種站 蘇貞昌：最後關鍵', 'https://www.ptt.cc/bbs/nCoV2019/M.1654258222.A.F20.html'], ['[新聞] 越南民眾打疫苗意願低 政府正了解可否強', 'https://www.ptt.cc/bbs/nCoV2019/M.1654258943.A.501.html'], ['[新聞] 香港新增499例確診 3人虛報染疫被捕', 'https://www.ptt.cc/bbs/nCoV2019/M.1654260323.A.1CF.html'], ['[新聞] 感染Omicron 何美鄉：長新冠後遺症比例較', 'https://www.ptt.cc/bbs/nCoV2019/M.1654260588.A.70C.html'], ['[新聞] 入境檢疫天數縮短？陳時中：視染疫率逐步', 'https://www.ptt.cc/bbs/nCoV2019/M.1654075418.A.B2A.html'], ['[新聞] 柯文哲反中正紀念堂設接種站 陳時中籲體諒', 'https://www.ptt.cc/bbs/nCoV2019/M.1654086023.A.962.html'], ['[新聞] 陳時中：南部疫情近期達高峰 全國染疫率逾', 'https://www.ptt.cc/bbs/nCoV2019/M.1654086382.A.1F2.html'], ['[新聞] 封城陰影難消 上海解封後市民仍大量採購', 'https://www.ptt.cc/bbs/nCoV2019/M.1654089281.A.6A9.html'], ['[新聞] 中國多省民眾控接種疫苗後患白血病 遭官方打壓律師也不敢協', 'https://www.ptt.cc/bbs/nCoV2019/M.1654089537.A.02F.html'], ['[新聞] 全國今6404校停課 再創新高', 'https://www.ptt.cc/bbs/nCoV2019/M.1654089629.A.FE3.html'], ['[新聞] 香港確診稍回升 增505例', 'https://www.ptt.cc/bbs/nCoV2019/M.1654092564.A.034.html'], ['[新聞] 日本各地COVID-19疫情降溫 東京連19天趨', 'https://www.ptt.cc/bbs/nCoV2019/M.1654092973.A.9E2.html'], ['[新聞] 5月快篩到貨不及1億劑？ 指揮中心公開數', 'https://www.ptt.cc/bbs/nCoV2019/M.1654093426.A.CF9.html'], ['[新聞] 英估約200萬患者有新冠長期症狀 疲倦最常見', 'https://www.ptt.cc/bbs/nCoV2019/M.1654094568.A.346.html'], ['[新聞] 中市兒童疫苗接種逾8.3萬人 覆蓋率43.2%', 'https://www.ptt.cc/bbs/nCoV2019/M.1654099192.A.218.html'], ['[新聞] 巴西疫情回溫 聖保羅科委會建議室內戴口', 'https://www.ptt.cc/bbs/nCoV2019/M.1654135446.A.0DD.html'], ['[新聞] 衛福部：疫情進入廣泛社區流行 須注意脆弱', 'https://www.ptt.cc/bbs/nCoV2019/M.1654142406.A.42E.html'], ['[新聞] 第2輪快篩實名制6/6啟動 每家藥局單日配額增至117份', 'https://www.ptt.cc/bbs/nCoV2019/M.1654144239.A.121.html'], ['[新聞] 新增76,986例COVID-19確定病例', 'https://www.ptt.cc/bbs/nCoV2019/M.1654150161.A.904.html'], ['[新聞] 全國染疫率9% 陳秀熙:6月底可當流感化', 'https://www.ptt.cc/bbs/nCoV2019/M.1654170639.A.39C.html'], ['[新聞] 獨自騎機車免戴口罩 陳時中：可考慮開放', 'https://www.ptt.cc/bbs/nCoV2019/M.1654171574.A.CF9.html'], ['[新聞] 72小時核酸證明成必需品 上海人解封不忘', 'https://www.ptt.cc/bbs/nCoV2019/M.1654171640.A.0A7.html'], ['[新聞] 3成中國人常態化核酸檢測 挑戰不只是錢從哪來', 'https://www.ptt.cc/bbs/nCoV2019/M.1654172474.A.52C.html'], ['[新聞] 6/1起暫停落地採驗 入境旅客全數唾液採檢', 'https://www.ptt.cc/bbs/nCoV2019/M.1653982162.A.64A.html'], ['[新聞] 網傳孩童燒到41度才准收治 陳時中：用字惡劣謠言', 'https://www.ptt.cc/bbs/nCoV2019/M.1653983671.A.20F.html'], ['[新聞] 日本試辦觀光團1人確診全團隔離 陳時中：', 'https://www.ptt.cc/bbs/nCoV2019/M.1653987391.A.2BE.html'], ['[新聞] 屏東入校打疫苗 無學籍、私立托幼可至12診所', 'https://www.ptt.cc/bbs/nCoV2019/M.1653987453.A.43D.html'], ['[新聞] 台灣染疫死亡率未高於國際 陳時中搬數據', 'https://www.ptt.cc/bbs/nCoV2019/M.1654001298.A.D8D.html'], ['[新聞] 上海6/1解封 市民每2到3天要做一次核酸', 'https://www.ptt.cc/bbs/nCoV2019/M.1654002094.A.0B5.html'], ['[新聞] 香港今增329例COVID-19確診', 'https://www.ptt.cc/bbs/nCoV2019/M.1654002371.A.FCC.html'], ['[新聞] 桃園巨蛋體育館 端午連假免預約施打輝瑞', 'https://www.ptt.cc/bbs/nCoV2019/M.1654002730.A.7C9.html'], ['[新聞] 吉林四平市2次未測核酸拘10天 高壓手段引民怨', 'https://www.ptt.cc/bbs/nCoV2019/M.1654003361.A.014.html'], ['[新聞] 六都兒童大型接種站端午不休假 預約管道一次看', 'https://www.ptt.cc/bbs/nCoV2019/M.1654003805.A.653.html'], ['[新聞] 上海解封悲喜參半 居民：難保不會再來一', 'https://www.ptt.cc/bbs/nCoV2019/M.1654012050.A.B05.html'], ['[新聞] 花蓮重症死亡53人 2/3是長照機構長者', 'https://www.ptt.cc/bbs/nCoV2019/M.1654012271.A.736.html'], ['[新聞] 台中科博館設大型兒童疫苗接種站 動線安', 'https://www.ptt.cc/bbs/nCoV2019/M.1654013323.A.5A6.html'], ['[新聞] 日本放寬邊境管制 台灣英美等國人士免篩檢隔離', 'https://www.ptt.cc/bbs/nCoV2019/M.1654048112.A.AED.html'], ['[新聞] 新增88,293例COVID-19確定病例，分別為88', 'https://www.ptt.cc/bbs/nCoV2019/M.1654063839.A.FBB.html']];
    
    news.forEach(element => {
        InsertItem(element[0], element[1]);
    });
});

function InsertItem(text, link) {
    jQuery('<a>', {
        class: 'list-group-item list-group-item-action',
        href: link,
        target: '_blank'
    }).css("cursor","context-menu")
    
    .append(`
        <div class="fw-bold">${text}</div>
    `).appendTo('#js-insert-news');
}