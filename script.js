const countries = [
    { names: ["andorra"], flag: "https://flagcdn.com/ad.svg" },
    { names: ["united arab emirates","unitedarabemirates","uae"], flag: "https://flagcdn.com/ae.svg" },
    { names: ["afghanistan"], flag: "https://flagcdn.com/af.svg" },
    { names: ["antigua and barbuda","antiguaandbarbuda","antiguabarbuda","antigua"], flag: "https://flagcdn.com/ag.svg" },
    { names: ["anguilla"], flag: "https://flagcdn.com/ai.svg" },
    { names: ["albania"], flag: "https://flagcdn.com/al.svg" },
    { names: ["armenia"], flag: "https://flagcdn.com/am.svg" },
    { names: ["angola"], flag: "https://flagcdn.com/ao.svg" },,
    { names: ["argentina"], flag: "https://flagcdn.com/ar.svg" },
    { names: ["austria"], flag: "https://flagcdn.com/at.svg" },
    { names: ["australia"], flag: "https://flagcdn.com/au.svg" },
    { names: ["azerbaijan"], flag: "https://flagcdn.com/az.svg" },
    { names: ["bosnia and herzegovina","bosniaandherzegovina","bosniaherzegovina","bosnia"], flag: "https://flagcdn.com/ba.svg" },
    { names: ["barbados"], flag: "https://flagcdn.com/bb.svg" },
    { names: ["bangladesh"], flag: "https://flagcdn.com/bd.svg" },
    { names: ["belgium"], flag: "https://flagcdn.com/be.svg" },
    { names: ["burkina faso","burkinafaso"], flag: "https://flagcdn.com/bf.svg" },
    { names: ["bulgaria"], flag: "https://flagcdn.com/bg.svg" },
    { names: ["bahrain"], flag: "https://flagcdn.com/bh.svg" },
    { names: ["burundi"], flag: "https://flagcdn.com/bi.svg" },
    { names: ["benin"], flag: "https://flagcdn.com/bj.svg" },
    { names: ["brunei"], flag: "https://flagcdn.com/bn.svg" },
    { names: ["bolivia"], flag: "https://flagcdn.com/bo.svg" },
    { names: ["brazil"], flag: "https://flagcdn.com/br.svg" },
    { names: ["bahamas"], flag: "https://flagcdn.com/bs.svg" },
    { names: ["bhutan"], flag: "https://flagcdn.com/bt.svg" },
    { names: ["botswana"], flag: "https://flagcdn.com/bw.svg" },
    { names: ["belarus"], flag: "https://flagcdn.com/by.svg" },
    { names: ["belize"], flag: "https://flagcdn.com/bz.svg" },
    { names: ["canada"], flag: "https://flagcdn.com/ca.svg" },
    { names: ["dr congo","drcongo","democratic republic of the congo","congo", "drc"], flag: "https://flagcdn.com/cd.svg" },
    { names: ["central african republic","centralafricanrepublic","car"], flag: "https://flagcdn.com/cf.svg" },
    { names: ["republic of the congo","republicofthecongo","congo"], flag: "https://flagcdn.com/cg.svg" },
    { names: ["switzerland"], flag: "https://flagcdn.com/ch.svg" },
    { names: ["côte d'ivoire (ivory coast)","côted'ivoire(ivorycoast)","côte d'ivoire","côted'ivoire","ivory coast"], flag: "https://flagcdn.com/ci.svg" },
    { names: ["chile"], flag: "https://flagcdn.com/cl.svg" },
    { names: ["cameroon"], flag: "https://flagcdn.com/cm.svg" },
    { names: ["china"], flag: "https://flagcdn.com/cn.svg" },
    { names: ["colombia"], flag: "https://flagcdn.com/co.svg" },
    { names: ["costa rica","costarica"], flag: "https://flagcdn.com/cr.svg" },
    { names: ["cuba"], flag: "https://flagcdn.com/cu.svg" },
    { names: ["cape verde","capeverde"], flag: "https://flagcdn.com/cv.svg" },
    { names: ["cyprus"], flag: "https://flagcdn.com/cy.svg" },
    { names: ["czechia","czech republic"], flag: "https://flagcdn.com/cz.svg" },
    { names: ["germany"], flag: "https://flagcdn.com/de.svg" },
    { names: ["djibouti"], flag: "https://flagcdn.com/dj.svg" },
    { names: ["denmark"], flag: "https://flagcdn.com/dk.svg" },
    { names: ["dominica"], flag: "https://flagcdn.com/dm.svg" },
    { names: ["dominican republic","dominicanrepublic","dominican"], flag: "https://flagcdn.com/do.svg" },
    { names: ["algeria"], flag: "https://flagcdn.com/dz.svg" },
    { names: ["ecuador"], flag: "https://flagcdn.com/ec.svg" },
    { names: ["estonia"], flag: "https://flagcdn.com/ee.svg" },
    { names: ["egypt"], flag: "https://flagcdn.com/eg.svg" },
    { names: ["eritrea"], flag: "https://flagcdn.com/er.svg" },
    { names: ["spain"], flag: "https://flagcdn.com/es.svg" },
    { names: ["ethiopia"], flag: "https://flagcdn.com/et.svg" },
    { names: ["finland"], flag: "https://flagcdn.com/fi.svg" },
    { names: ["fiji"], flag: "https://flagcdn.com/fj.svg" },
    { names: ["micronesia"], flag: "https://flagcdn.com/fm.svg" },
    { names: ["france"], flag: "https://flagcdn.com/fr.svg" },
    { names: ["gabon"], flag: "https://flagcdn.com/ga.svg" },
    { names: ["united kingdom","unitedkingdom","uk","britain"], flag: "https://flagcdn.com/gb.svg" },
    { names: ["grenada"], flag: "https://flagcdn.com/gd.svg" },
    { names: ["georgia"], flag: "https://flagcdn.com/ge.svg" },
    { names: ["ghana"], flag: "https://flagcdn.com/gh.svg" },
    { names: ["greenland"], flag: "https://flagcdn.com/gl.svg" },
    { names: ["gambia"], flag: "https://flagcdn.com/gm.svg" },
    { names: ["guinea"], flag: "https://flagcdn.com/gn.svg" },
    { names: ["equatorial guinea","equatorialguinea","equatorial"], flag: "https://flagcdn.com/gq.svg" },
    { names: ["greece"], flag: "https://flagcdn.com/gr.svg" },
    { names: ["guatemala"], flag: "https://flagcdn.com/gt.svg" },
    { names: ["guam"], flag: "https://flagcdn.com/gu.svg" },
    { names: ["guinea-bissau","guinea bissau"], flag: "https://flagcdn.com/gw.svg" },
    { names: ["guyana"], flag: "https://flagcdn.com/gy.svg" },
    { names: ["honduras"], flag: "https://flagcdn.com/hn.svg" },
    { names: ["croatia"], flag: "https://flagcdn.com/hr.svg" },
    { names: ["haiti"], flag: "https://flagcdn.com/ht.svg" },
    { names: ["hungary"], flag: "https://flagcdn.com/hu.svg" },
    { names: ["indonesia"], flag: "https://flagcdn.com/id.svg" },
    { names: ["ireland"], flag: "https://flagcdn.com/ie.svg" },
    { names: ["israel"], flag: "https://flagcdn.com/il.svg" },
    { names: ["india"], flag: "https://flagcdn.com/in.svg" },
    { names: ["iraq"], flag: "https://flagcdn.com/iq.svg" },
    { names: ["iran"], flag: "https://flagcdn.com/ir.svg" },
    { names: ["iceland"], flag: "https://flagcdn.com/is.svg" },
    { names: ["italy"], flag: "https://flagcdn.com/it.svg" },
    { names: ["jersey"], flag: "https://flagcdn.com/je.svg" },
    { names: ["jamaica"], flag: "https://flagcdn.com/jm.svg" },
    { names: ["jordan"], flag: "https://flagcdn.com/jo.svg" },
    { names: ["japan"], flag: "https://flagcdn.com/jp.svg" },
    { names: ["kenya"], flag: "https://flagcdn.com/ke.svg" },
    { names: ["kyrgyzstan"], flag: "https://flagcdn.com/kg.svg" },
    { names: ["cambodia"], flag: "https://flagcdn.com/kh.svg" },
    { names: ["kiribati"], flag: "https://flagcdn.com/ki.svg" },
    { names: ["comoros"], flag: "https://flagcdn.com/km.svg" },
    { names: ["saint kitts and nevis","saintkittsandnevis","saint kittsnevis","saint kitts"], flag: "https://flagcdn.com/kn.svg" },
    { names: ["north korea","northkorea","korea"], flag: "https://flagcdn.com/kp.svg" },
    { names: ["south korea","southkorea","korea"], flag: "https://flagcdn.com/kr.svg" },
    { names: ["kuwait"], flag: "https://flagcdn.com/kw.svg" },
    { names: ["kazakhstan"], flag: "https://flagcdn.com/kz.svg" },
    { names: ["laos"], flag: "https://flagcdn.com/la.svg" },
    { names: ["lebanon"], flag: "https://flagcdn.com/lb.svg" },
    { names: ["saint lucia","saintlucia"], flag: "https://flagcdn.com/lc.svg" },
    { names: ["liechtenstein"], flag: "https://flagcdn.com/li.svg" },
    { names: ["sri lanka","srilanka"], flag: "https://flagcdn.com/lk.svg" },
    { names: ["liberia"], flag: "https://flagcdn.com/lr.svg" },
    { names: ["lesotho"], flag: "https://flagcdn.com/ls.svg" },
    { names: ["lithuania"], flag: "https://flagcdn.com/lt.svg" },
    { names: ["luxembourg"], flag: "https://flagcdn.com/lu.svg" },
    { names: ["latvia"], flag: "https://flagcdn.com/lv.svg" },
    { names: ["libya"], flag: "https://flagcdn.com/ly.svg" },
    { names: ["morocco"], flag: "https://flagcdn.com/ma.svg" },
    { names: ["monaco"], flag: "https://flagcdn.com/mc.svg" },
    { names: ["moldova"], flag: "https://flagcdn.com/md.svg" },
    { names: ["montenegro"], flag: "https://flagcdn.com/me.svg" },
    { names: ["madagascar"], flag: "https://flagcdn.com/mg.svg" },
    { names: ["marshall islands","marshallislands"], flag: "https://flagcdn.com/mh.svg" },
    { names: ["north macedonia","northmacedonia","macedonia"], flag: "https://flagcdn.com/mk.svg" },
    { names: ["mali"], flag: "https://flagcdn.com/ml.svg" },
    { names: ["myanmar"], flag: "https://flagcdn.com/mm.svg" },
    { names: ["mongolia"], flag: "https://flagcdn.com/mn.svg" },
    { names: ["mauritania"], flag: "https://flagcdn.com/mr.svg" },
    { names: ["malta"], flag: "https://flagcdn.com/mt.svg" },
    { names: ["mauritius"], flag: "https://flagcdn.com/mu.svg" },
    { names: ["maldives"], flag: "https://flagcdn.com/mv.svg" },
    { names: ["malawi"], flag: "https://flagcdn.com/mw.svg" },
    { names: ["mexico"], flag: "https://flagcdn.com/mx.svg" },
    { names: ["malaysia"], flag: "https://flagcdn.com/my.svg" },
    { names: ["mozambique"], flag: "https://flagcdn.com/mz.svg" },
    { names: ["namibia"], flag: "https://flagcdn.com/na.svg" },
    { names: ["new caledonia","newcaledonia"], flag: "https://flagcdn.com/nc.svg" },
    { names: ["niger"], flag: "https://flagcdn.com/ne.svg" },
    { names: ["nigeria"], flag: "https://flagcdn.com/ng.svg" },
    { names: ["nicaragua"], flag: "https://flagcdn.com/ni.svg" },
    { names: ["netherlands"], flag: "https://flagcdn.com/nl.svg" },
    { names: ["norway"], flag: "https://flagcdn.com/no.svg" },
    { names: ["nepal"], flag: "https://flagcdn.com/np.svg" },
    { names: ["nauru"], flag: "https://flagcdn.com/nr.svg" },
    { names: ["new zealand","newzealand"], flag: "https://flagcdn.com/nz.svg" },
    { names: ["oman"], flag: "https://flagcdn.com/om.svg" },
    { names: ["panama"], flag: "https://flagcdn.com/pa.svg" },
    { names: ["peru"], flag: "https://flagcdn.com/pe.svg" },
    { names: ["papua new guinea","papuanewguinea","papua"], flag: "https://flagcdn.com/pg.svg" },
    { names: ["philippines"], flag: "https://flagcdn.com/ph.svg" },
    { names: ["pakistan"], flag: "https://flagcdn.com/pk.svg" },
    { names: ["poland"], flag: "https://flagcdn.com/pl.svg" },
    { names: ["palestine"], flag: "https://flagcdn.com/ps.svg" },
    { names: ["portugal"], flag: "https://flagcdn.com/pt.svg" },
    { names: ["palau"], flag: "https://flagcdn.com/pw.svg" },
    { names: ["paraguay"], flag: "https://flagcdn.com/py.svg" },
    { names: ["qatar"], flag: "https://flagcdn.com/qa.svg" },
    { names: ["romania"], flag: "https://flagcdn.com/ro.svg" },
    { names: ["serbia"], flag: "https://flagcdn.com/rs.svg" },
    { names: ["russia"], flag: "https://flagcdn.com/ru.svg" },
    { names: ["rwanda"], flag: "https://flagcdn.com/rw.svg" },
    { names: ["saudi arabia","saudiarabia"], flag: "https://flagcdn.com/sa.svg" },
    { names: ["solomon islands","solomonislands","solomon"], flag: "https://flagcdn.com/sb.svg" },
    { names: ["seychelles"], flag: "https://flagcdn.com/sc.svg" },
    { names: ["sudan"], flag: "https://flagcdn.com/sd.svg" },
    { names: ["sweden"], flag: "https://flagcdn.com/se.svg" },
    { names: ["singapore"], flag: "https://flagcdn.com/sg.svg" },
    { names: ["slovenia"], flag: "https://flagcdn.com/si.svg" },
    { names: ["slovakia"], flag: "https://flagcdn.com/sk.svg" },
    { names: ["sierra leone","sierraleone"], flag: "https://flagcdn.com/sl.svg" },
    { names: ["san marino","sanmarino"], flag: "https://flagcdn.com/sm.svg" },
    { names: ["senegal"], flag: "https://flagcdn.com/sn.svg" },
    { names: ["somalia"], flag: "https://flagcdn.com/so.svg" },
    { names: ["suriname"], flag: "https://flagcdn.com/sr.svg" },
    { names: ["south sudan","southsudan","sudan"], flag: "https://flagcdn.com/ss.svg" },
    { names: ["são tomé and príncipe","sãotoméandpríncipe","são tomépríncipe","sao tome","saotome","saotomeprincipe"], flag: "https://flagcdn.com/st.svg" },
    { names: ["el salvador","elsalvador"], flag: "https://flagcdn.com/sv.svg" },
    { names: ["syria"], flag: "https://flagcdn.com/sy.svg" },
    { names: ["eswatini (swaziland)","eswatini(swaziland)","eswatini","swaziland"], flag: "https://flagcdn.com/sz.svg" },
    { names: ["chad"], flag: "https://flagcdn.com/td.svg" },
    { names: ["togo"], flag: "https://flagcdn.com/tg.svg" },
    { names: ["thailand"], flag: "https://flagcdn.com/th.svg" },
    { names: ["tajikistan"], flag: "https://flagcdn.com/tj.svg" },
    { names: ["timor-leste","east timor"], flag: "https://flagcdn.com/tl.svg" },
    { names: ["turkmenistan"], flag: "https://flagcdn.com/tm.svg" },
    { names: ["tunisia"], flag: "https://flagcdn.com/tn.svg" },
    { names: ["tonga"], flag: "https://flagcdn.com/to.svg" },
    { names: ["turkey"], flag: "https://flagcdn.com/tr.svg" },
    { names: ["trinidad and tobago","trinidadandtobago","trinidadtobago","trinidad"], flag: "https://flagcdn.com/tt.svg" },
    { names: ["tuvalu"], flag: "https://flagcdn.com/tv.svg" },
    { names: ["taiwan"], flag: "https://flagcdn.com/tw.svg" },
    { names: ["tanzania"], flag: "https://flagcdn.com/tz.svg" },
    { names: ["ukraine"], flag: "https://flagcdn.com/ua.svg" },
    { names: ["uganda"], flag: "https://flagcdn.com/ug.svg" },
    { names: ["united states","unitedstates","us","usa"], flag: "https://flagcdn.com/us.svg" },
    { names: ["uruguay"], flag: "https://flagcdn.com/uy.svg" },
    { names: ["uzbekistan"], flag: "https://flagcdn.com/uz.svg" },
    { names: ["vatican city (holy see)","vaticancity(holysee)","vatican city","vaticancity","holy see","vatican"], flag: "https://flagcdn.com/va.svg" },
    { names: ["saint vincent and the grenadines","saintvincentandthegrenadines","saint vincentthe grenadines","saint vincent"], flag: "https://flagcdn.com/vc.svg" },
    { names: ["venezuela"], flag: "https://flagcdn.com/ve.svg" },
    { names: ["vietnam"], flag: "https://flagcdn.com/vn.svg" },
    { names: ["vanuatu"], flag: "https://flagcdn.com/vu.svg" },
    { names: ["samoa"], flag: "https://flagcdn.com/ws.svg" },
    { names: ["kosovo"], flag: "https://flagcdn.com/xk.svg" },
    { names: ["yemen"], flag: "https://flagcdn.com/ye.svg" },
    { names: ["south africa","southafrica"], flag: "https://flagcdn.com/za.svg" },
    { names: ["zambia"], flag: "https://flagcdn.com/zm.svg" },
    { names: ["zimbabwe"], flag: "https://flagcdn.com/zw.svg" }
];

let currentCountryIndex = Math.floor(Math.random() * countries.length);
let currentScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    const flagElement = document.getElementById('country-flag');
    const guessInput = document.getElementById('guess');
    const submitGuessButton = document.getElementById('submitGuess');
    const resultElement = document.getElementById('result');
    const nextCountryButton = document.getElementById('nextBtn');
    const emptyErrorVal = document.querySelector("#empty-error");
    const userScoreVal = document.querySelector("#user-score-val")
    userScoreVal.textContent = currentScore;

    function showCountry(index) {
        flagElement.src = countries[index].flag;
        guessInput.value = '';
        resultElement.textContent = '';
        emptyErrorVal.textContent = '';
    }

    function checkGuess() {
        const userGuess = guessInput.value.trim().toLowerCase();
        const correctAnswers = countries[currentCountryIndex].names.map(name => name.toLowerCase());
        if (correctAnswers.includes(userGuess)) {
            resultElement.textContent = 'Correct!';
            resultElement.style.color = 'green';
            currentScore += 10;
            userScoreVal.textContent = currentScore;
            nextCountry();
        } else {
            resultElement.textContent = `Wrong! The correct answer is ${countries[currentCountryIndex].names[0]}.`;
            resultElement.style.color = 'red';
        }

    }

    function nextCountry() {
        currentCountryIndex = Math.floor(Math.random() * countries.length);
        showCountry(currentCountryIndex);
    }

    submitGuessButton.addEventListener('click', () => {
        if (guessInput.value == "") {
            emptyErrorVal.textContent = "Input field cannot be empty";
        } else {
            checkGuess();
            emptyErrorVal.textContent = "";
        }
    });

    guessInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            if (guessInput.value == "") {
                emptyErrorVal.textContent = "Input field cannot be empty";
            } else {
                checkGuess();
                emptyErrorVal.textContent = "";
            }
        }
    });

    nextCountryButton.addEventListener('click', nextCountry);

    // Show the first country on page load
    showCountry(currentCountryIndex);
});
