import React from "react";
import Card from "./Components/Card";
import Learn from "./learn/Learn"
// rfce
function App() {
  return <>
    <div className="container mx-auto">
        <h1 className="text-4xl text-center text-red-500 text-bold" >Card List</h1>
        <div className="grid grid-col-3 gap-10">
            <Card title = "बर्खा आयो, सरकार आएन : बीपी राजमार्गको बिजोग उस्तै" 
            imgurl = "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/miscellaneous/bphighway06032025dji0052-0462025095052-1000x0.jpg&w=1001&h=0" 
            data = "जेष्ठ २२, २०८२" 
            author = "Shishir Bhandari" 
            description ="बीपी राजमार्गअन्तर्गत काभ्रेको चौकीडाँडा खण्ड । गत असोज दोस्रो साताको बाढीले राजमार्ग भत्काएपछि रोशीखोला किनारमा अस्थायी सडक बनाएर यातायात सञ्चालन गरिएको छ । तस्बिर : हेमन्त श्रेष्ठ/कान्तिपुर" />
            <Card title = "सापकोटाविरुद्ध ज्यान मुद्दामा अनुसन्धान गर्न सर्वोच्चको आदेश" imgurl = "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/miscellaneous/supreme-court-3032025110720-1000x0.jpg&w=1001&h=0" data = "जेष्ठ २२, २०८२" author = "Shishir Bhadnari" description ="काठमाडौँ — सर्वोच्च अदालतले पूर्वसभामुख एवं माओवादी उपाध्यक्ष अग्नि सापकोटाविरुद्ध अपहरण तथा ज्यान कसुरमा अनुसन्धान गर्न सरकारलाई आदेश दिएको छ । सापकोटाविरुद्ध २०६२ मा काभ्रेका अर्जुन लामाको हत्या गरेको आरोप छ । " />
            <Card title = "मैकोटको मुहारमा विकासको लाली" imgurl = "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/miscellaneous/maikot-gaun-0810218-rkm-east6-0362025064810-1000x0.jpg&w=1001&h=0" data = "जेष्ठ २२, २०८२" author = "laxman khanal" description ="रुकुमपूर्व — बारीमा कतै चैतमा रोपेका मकै हलक्क छन्, कतै स्याउका लटरम्म फल लागेका छन् । जाडो न गर्मी ठिक्कको मध्य–जेठमा मौसमसँगै रुकुमपूर्वको पुथाउत्तरगंगा–१ मैकोट गाउँ यतिबेला मनोरम देखिएको छ । हिउँदे वर्षा र हिमपात पर्याप्त नभए पनि चैतयता पटक–पटक परिरहेको पानीले जमिन सिञ्चित हुँदा किसानमा खुसी छाएको छ । " />
        </div>
    </div>
    <Learn />
  </>
}
export default App;