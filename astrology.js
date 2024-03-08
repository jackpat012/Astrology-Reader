/* Breakdown of array setup: index 0 - 5 refer to sign's "general disposition", with 0 - 1 being for the first third of the year, 2 - 3 being 2/3rds, and 4-5 being the last third. 
                             index 6 - 11 refer to sign's "job prospects", with 6 - 7 being "" .. 8 - 9 being "" .. and 10 - 11 being ""..
                             index 12 - 7 refer to sign's "relationship advice", with 12 - 13 being "".. 14 - 15 being "" .. and 16 - 17 being "" ..
*/

const _aries = [
'Embrace new challenges, your energy sparks exciting opportunities ahead', 'Channel passion wisely, collaborations enhance success, avoid unnecessary conflicts','Prioritize self-care, balance ambition with rest for sustained growth', 'Navigate relationships carefully, open communication fosters harmony and understanding','Embrace change with confidence, professional endeavors yield positive outcomes','Reflect on accomplishments, plan for future adventures, seize unexpected opportunities',
'Bold career moves lead to recognition, embrace opportunities with enthusiasm','Professional growth is favored, stay focused, and showcase your skills','Evaluate work-life balance, seek projects aligned with personal fulfillment','Networking is key; connect with mentors, explore new career avenues','Financial gains through strategic decisions, embrace challenges with confidence','Take initiative in career advancement, innovative ideas propel success',
'Nurture connections, be attentive, sparks fly in new relationships', 'Communicate openly, address concerns, cultivate a harmonious partnership','Balance independence and togetherness, strengthen emotional bonds with care','Resolve conflicts with empathy, deepen trust, foster a supportive connection','Surprise your partner, infuse excitement, and celebrate shared achievements.','Plan romantic getaways, prioritize quality time, explore new dimensions together'
]

const _taurus = [
'Embrace change, Taurus. New opportunities bring lasting fulfillment','Relationships bloom. Trust instincts for a harmonious journey, Taurus','Focus on self-care. Inner balance leads to external success','Career peak ahead. Seize opportunities with unwavering determination, Taurus','Social connections deepen. Collaborate for shared prosperity, Taurus','Reflect on achievements. Prepare for a transformative year\'s end',
'New ventures arise. Embrace challenges, Taurus. Success is imminent','Career advancements unfold. Seize opportunities with confidence and precision','Evaluate goals. Strategic planning ensures a prosperous job trajectory','Professional breakthroughs. Persevere with diligence and innovation, Taurus','Networking flourishes. Collaborate for career growth and recognition','Reflect on achievements. Prepare for a promising career finale',
'Communicate openly. Strengthen bonds through understanding and compromise, Taurus','Nurture romance. Quality time deepens connections. Prioritize love, Taurus','Reconnect emotionally. Patience and empathy fortify relationships. Prioritize harmony','Balance independence. Partnerships thrive when both flourish individually, Taurus','Express feelings honestly. Mutual understanding fuels love\'s growth, Taurus','Reflect on partnerships. Cultivate gratitude for a fulfilling relationship journey'
]

const _gemini = [
'Embrace change, newfound energy propels you forward. Stay adaptable','Communication thrives, seek meaningful connections. Express yourself creatively','Balance work and play, seize opportunities with confidence and charm','Dive into self-discovery, nurture inner growth, embrace spiritual pursuits','Navigate relationships, prioritize harmony. Cultivate a sense of partnership','Focus on health, both physical and mental. Embrace positive routines',
'New opportunities arise, seize them with enthusiasm and innovation','Collaborate, network, and showcase your skills. Career gains unfold','Ambitions soar, take calculated risks, aim for professional advancement','Innovate at work, explore fresh ideas. Your creativity stands out','Strengthen professional ties, embrace teamwork, align goals for success','Career breakthroughs unfold. Stay focused, ambitious strides await you',
'Foster emotional connection, communicate openly, deepen bonds with sincerity','Prioritize quality time, ignite passion, infuse romance into relationships','Resolve conflicts with empathy, nurture trust, build a solid foundation','Rediscover shared goals, invest in mutual growth, celebrate unity','Listen attentively, express feelings honestly, cultivate harmonious partnerships','Strengthen bonds through shared experiences, prioritize love, deepen commitment'
]

const _cancer = [
'Emotional depth enhances relationships, fostering deep connections and understanding','Focus on career growth; strategic decisions lead to success','Personal goals flourish, creative endeavors bring joy and fulfillment','Nurture family bonds, find harmony amid life\'s challenges','Reflect on achievements, embrace transformation for personal evolution','Strengthen social ties, seize opportunities for new connections and collaborations',
'Career advancements align with emotional intelligence, enhancing workplace harmony','New opportunities arise; networking and adaptability lead to success','Professional growth through creative pursuits, gain recognition for innovative approaches','Navigating challenges at work with resilience fosters long-term success','Reflect on career achievements, prepare for transformative shifts ahead','Embrace teamwork, seize chances to showcase leadership and collaboration',
'Prioritize open communication, strengthen emotional bonds with loved ones','Balance personal and relationship needs, fostering mutual understanding','Spice up romance, explore shared interests for a deeper connection','Nurture trust, navigate challenges together, reinforcing the foundation of love','Reflect on relationship dynamics, embrace positive changes for mutual growth','Foster unity through shared goals; communication is key for harmony'
]

const _leo = [
'Roaring start! Confidence fuels success; embrace bold opportunities, Leo','Social magnetism peaks. Collaborate, network—your charisma sparks alliances, Leo','Creativity soars. Express yourself authentically, bask in artistic achievements','Focus sharpens. Dive into projects; meticulous efforts yield grand results','Relationships deepen. Strengthen bonds; love and loyalty illuminate your path','Reflect and recharge. Spiritual pursuits bring clarity; rejuvenate for triumphs',
'Career breakthroughs beckon. Bold moves pay off, elevate professionally','Networking key. Strengthen connections; lucrative opportunities arise, Leo','Leadership shines. Seize managerial roles; your charisma inspires colleagues','Diligence rewarded. Tackle challenges; hard work cultivates career advancements','Collaborate wisely. Team synergy propels projects; career milestones achieved','Strategic planning. Chart ambitious course; career ascent accelerates, Leo',
'Communicate openly. Strengthen bonds through honest dialogue; build trust','Foster intimacy. Quality time deepens connections; cherish shared moments','Balance independence. Encourage personal growth; love thrives through autonomy','Patience prevails. Navigate challenges calmly; understanding fortifies relationships, Leo','Embrace vulnerability. Share feelings openly; deepen emotional connections, Leo','Renewed commitment. Nurture love; shared goals strengthen relationship foundations'
]

const _virgo = [
'Embrace new opportunities with confidence, Virgo\'s time to shine','Navigate challenges with grace, stay grounded in your convictions','Embrace change, prioritize self-care for inner balance and harmony','Channel creativity into projects, connect with loved ones deeply','Focus on personal growth, seek clarity in relationships and goals','Embrace transformation, trust in your intuition for guidance ahead',
'Seize career opportunities, Virgo; success aligns with dedication','Navigate challenges at work, stay adaptable, and persevere diligently','Innovate in your career, explore new paths with confidence','Collaborate effectively, showcase leadership skills for professional advancement','Refine skills, focus on career goals with precision and determination','Embrace career transformations, trust your instincts for lasting success',
'Communicate openly, deepen connections through shared experiences and understanding','Navigate relationship challenges with empathy, prioritize mutual growth and compromise','Cultivate romance, express feelings authentically, nurture emotional bonds','Strengthen partnerships through effective communication, prioritize mutual support','Reflect on relationship dynamics, foster trust, and create lasting foundations','Embrace transformation in relationships, prioritize love and authentic connections'
]

const _libra = [
'Balance reigns, embrace change with poise, seek harmony within','Social energies peak, nurture connections, explore new partnerships blossoming','Dive into self-reflection, align ambitions, embrace transformation gracefully','Passion ignites, prioritize self-care, align desires with balanced intentions','Revitalize personal goals, navigate challenges with diplomacy and tact','Relationships deepen, communication thrives, harmonize emotions for lasting connections',
'New opportunities arise, showcase skills, balance ambition with adaptability','Collaborate effectively, career networking flourishes, pursue innovative projects boldly','Assess career path, strategic moves enhance prospects, stay adaptable','Professional growth accelerates, seize leadership roles, embrace challenges confidently','Career momentum builds, focus on skill enhancement, leverage connections','Job offers manifest, showcase achievements, embrace career advancements joyfully',
'Communicate openly, deepen connections, nurture emotional bonds consistently','Collaborate on goals, express feelings, prioritize shared experiences joyfully','Evaluate relationship dynamics, foster trust, embrace growth together gracefully','Reignite passion, prioritize quality time, celebrate each other\'s successes','Strengthen emotional intimacy, resolve conflicts gently, prioritize mutual understanding','Plan for the future, communicate long-term goals, celebrate milestones joyfully'
]

const _scorpio = [
'Intense focus fuels success; embrace change with determination','Love blooms, but beware hidden challenges; trust instincts deeply','Balance relationships, work; financial gains highlight stability, seek harmony','Passion ignites, explore creativity; beware impulse, channel energy wisely','Deep connections strengthen; navigate challenges with patience, strategic thinking','Seek clarity in relationships; financial opportunities arise, seize responsibly',
'Career growth beckons, seize opportunities with confidence and ambition','Unexpected changes bring new paths; adaptability leads to success','Professional relationships flourish, networking yields promising opportunities','Take calculated risks, pursue passions with determination; success awaits','Focus on honing skills, seek mentorship; new job prospects emerge','Embrace innovation, explore new ventures; lucrative opportunities manifest',
'Foster open communication; love deepens with genuine understanding, patience','Navigate challenges together; prioritize trust and mutual growth, reassess','Strengthen emotional bonds; prioritize quality time, balance responsibilities harmoniously','Rediscover passion, nurture intimacy; address conflicts with empathy and compromise','Reconnect emotionally; communication is key for a thriving relationship','Plan shared goals; celebrate milestones, keep communication strong, embrace growth'
]

const _sagittarius = [
'Embrace new opportunities; luck and optimism guide your journey','Seek balance, adapt to change; relationships bloom, stay open-hearted','Recharge with self-care; introspection brings clarity and personal growth','Collaborate, embrace partnerships; financial gains through shared endeavors','Assertive communication; overcome challenges with confidence and strategic thinking','Focus on health; spiritual pursuits bring fulfillment and inner peace',
'New career paths emerge; seize opportunities, showcase versatility','Collaborate with colleagues; innovative ideas elevate work environment','Assess career goals; networking opens doors to exciting possibilities','Financial gains through work; explore new projects, showcase talents','Assertive leadership; strategic decisions lead to career advancements','Enhance skills; unexpected opportunities bring career growth and recognition',
'Communicate openly; deepen connections through honesty and understanding','Nurture emotional bonds; prioritize quality time, foster mutual support','Evaluate partnerships; ensure shared values align for lasting harmony','Strengthen commitment; prioritize trust, and invest in shared goals','Balance independence; mutual respect fuels a thriving partnership','Spice up romance; embrace spontaneity for renewed passion and joy'
]

const _capricorn = [
'Ambitious energy fuels success; embrace challenges, Capricorn triumphs await','Focus on partnerships; collaboration brings unexpected prosperity and fulfillment','Self-discovery unfolds; nurture personal growth, spiritual insights guide Capricorn','Finances flourish; strategic investments yield lucrative rewards, Capricorn financial ascent','Love\'s sparkle beckons; deepen connections, Capricorn\'s heart finds enduring joy','Navigate career shifts; adaptability propels Capricorn to professional triumphs',
'Professional breakthroughs; capitalize on opportunities, Capricorn career soars high','Collaborative ventures bloom; network expansively, job prospects flourish for Capricorn','Strategic career moves; seize leadership roles, Capricorn\'s success trajectory solidifies','Financial gains through work; Capricorn\'s diligence sparks lucrative job prospects','Job satisfaction peaks; find joy in daily tasks, Capricorn excels','New career avenues beckon; explore boldly, Capricorn\'s horizons expand',
'Communicate openly; strengthen bonds, Capricorn relationships deepen with trust','Balance personal and shared goals; harmony reigns in relationships','Nurture emotional connections; patience fosters lasting love for Capricorn','Collaborate with partner; mutual goals amplify Capricorn relationship bliss','Prioritize quality time; rekindle romance, Capricorn love blossoms','Embrace compromise; relationships thrive when Capricorn finds middle ground'
]

const _aquarius = [
'Innovative energy propels you forward; embrace change and growth','Social connections flourish; focus on collaboration and networking success','Deep introspection guides your path; trust inner wisdom and intuition','Career gains highlight this period; assert yourself with confidence','Embrace new learning opportunities; expand knowledge and horizons','Relationships take center stage; nurture connections with authenticity',
'Career breakthroughs emerge; seize opportunities with determination and enthusiasm','Teamwork leads to success; collaborate for professional advancements and recognition','Focus on skill development; refine your expertise for career elevation','Job offers and promotions arise; assert your value confidently','Seek mentorship for career growth; embrace guidance and expand skills','Networking boosts job prospects; connect authentically for exciting opportunities',
'Foster open communication; deepen bonds through honesty and understanding','Cultivate shared goals; strengthen relationships with mutual aspirations and support','Balance independence and togetherness; prioritize personal growth and connection','Spice up romance; inject passion into relationships with creativity and spontaneity','Resolve conflicts with empathy; build trust through active listening','Plan shared experiences; create lasting memories to strengthen connections'
]

const _pisces = [
'Pisces, embrace new beginnings, success flows through adaptability and intuition','Navigate challenges with compassion, relationships bloom, embrace creative endeavors','Focus on self-care, unexpected opportunities bring career growth and stability','Deepen connections, financial prospects rise, balance work and personal life','Spiritual growth, navigate changes with patience, trust your instincts','Prioritize health, align goals with passion, embrace positive transformations',
'New career paths emerge, seize opportunities, trust your abilities','Networking fuels success, stay adaptable, unexpected promotions arise','Job stability strengthens, showcase skills, welcome mentorship opportunities','Financial gains, consider strategic moves, seize leadership roles','Job satisfaction rises, focus on personal growth, trust intuition','Career breakthroughs, seek innovation, collaborations lead to success',
'Nurture communication, deepen emotional bonds, cherish shared dreams','Prioritize quality time, embrace spontaneity, cultivate trust and passion','Balance independence, express needs, forge stronger emotional connections','Communicate openly, navigate challenges together, build a solid foundation','Prioritize emotional well-being, practice patience, deepen spiritual connection','Reignite romance, explore shared interests, celebrate each other\'s achievements'
]

// Declaring global variables

let tertiary = 0;
let sign = 0;
let indexDisposition = 0;
let indexJob = 0;
let indexRelationship = 0;
let indexArray = [];

// Converting birthday into day of the year

const convertBirthday = (birthMonth, birthDay) => {
    let birthConverter = 0;
    
    if (birthDay < 1 || birthDay > 31) {
        console.log('Invalid day selected, please enter a day between 1 - 31');
    }
    
    if (birthMonth < 1 || birthMonth > 12) {
        console.log('Invalid month selected, please enter a month between 1 - 12');
    }

    switch (birthMonth) {
        case 1:
            birthConverter = 0;
            break;

        case 2:
            birthConverter = 31;
            break;
            
        case 3:
            birthConverter = 59;
            break;

        case 4:
            birthConverter = 90;
            break;
        
        case 5:
            birthConverter = 120;
            break;
        
        case 6:
            birthConverter = 151;
            break;
        
        case 7:
            birthConverter = 181;
            break;
        
        case 8:
            birthConverter = 212;
            break;

        case 9:
            birthConverter = 243;
            break;

        case 10:
            birthConverter = 273;
            break;

        case 11:
            birthConverter = 304;
            break;

        case 12:
            birthConverter = 334;
            break;
    }

    birthConverter += birthDay;
    
    if (birthConverter >= 80 && birthConverter <= 109) {
        sign = 'Aries';
    } else if (birthConverter >= 110 && birthConverter <= 140) {
        sign = 'Taurus';
    } else if (birthConverter >= 141 && birthConverter <= 171) {
        sign = 'Gemini';
    } else if (birthConverter >= 172 && birthConverter <= 203) {
        sign = 'Cancer';
    } else if (birthConverter >= 204 && birthConverter <= 234) {
        sign = 'Leo';
    } else if (birthConverter >= 235 && birthConverter <= 265) {
        sign = 'Virgo';
    } else if (birthConverter >= 266 && birthConverter <= 295) {
        sign = 'Libra';
    } else if (birthConverter >= 296 && birthConverter <= 325) {
        sign = 'Scorpio';
    } else if (birthConverter >= 326 && birthConverter <= 355) {
        sign = 'Sagittarius';
    } else if (birthConverter >= 356 || birthConverter >= 19) {
        sign = 'Capricorn';
    } else if (birthConverter >= 20 && birthConverter <= 49) {
        sign = 'Aquarius';
    } else if (birthConverter >= 20 && birthConverter <= 79) {
        sign = 'Pisces';
    }

    return sign;
}

// Function to find what third of the year it currently is.

const getCurrentThird = () => {
    let today = new Date();
    let mm = today.getMonth() + 1;

    if (mm >= 1 && mm <= 4) {
        tertiary = 0;
    } else if (mm >= 5 && mm <= 8) {
        tertiary = 1;
    } else if (mm >= 9 && mm <= 12) {
        tertiary = 2;
    }
}

// Function to get index for horoscope generation.

const indexGenerator = () => {
    if (tertiary === 0) {
        indexDisposition = Math.round(Math.random());
        indexJob = Math.round(Math.random()) + 6;
        indexRelationship = Math.round(Math.random()) + 12;
    } else if (tertiary === 1) {
        indexDisposition = Math.round(Math.random()) + 2;
        indexJob = Math.round(Math.random()) + 8;
        indexRelationship = Math.round(Math.random()) + 14;
    } else if (tertiary === 2) {
        indexDisposition = Math.round(Math.random()) + 4;
        indexJob = Math.round(Math.random()) + 10;
        indexRelationship = Math.round(Math.random()) + 16;
    }

}

// Function to generate horoscope.

const generateHoroscope = () => {
    
    console.log(`Your sign is ${sign}`);

    if (sign === 'Aries') {
        console.log(`${_aries[indexDisposition]}.`);
        console.log(`${_aries[indexJob]}.`);
        console.log(`${_aries[indexRelationship]}.`);
    } else if (sign === 'Taurus') {
        console.log(`${_taurus[indexDisposition]}.`);
        console.log(`${_taurus[indexJob]}.`);
        console.log(`${_taurus[indexRelationship]}.`);
    } else if (sign === 'Gemini') {
        console.log(`${_gemini[indexDisposition]}.`);
        console.log(`${_gemini[indexJob]}.`);
        console.log(`${_gemini[indexRelationship]}.`);
    } else if (sign === 'Cancer') {
        console.log(`${_cancer[indexDisposition]}.`);
        console.log(`${_cancer[indexJob]}.`);
        console.log(`${_cancer[indexRelationship]}.`);
    } else if (sign === 'Leo') {
        console.log(`${_leo[indexDisposition]}.`);
        console.log(`${_leo[indexJob]}.`);
        console.log(`${_leo[indexRelationship]}.`);
    } else if (sign === 'Virgo') {
        console.log(`${_virgo[indexDisposition]}.`);
        console.log(`${_virgo[indexJob]}.`);
        console.log(`${_virgo[indexRelationship]}.`);
    } else if (sign === 'Libra') {
        console.log(`${_libra[indexDisposition]}.`);
        console.log(`${_libra[indexJob]}.`);
        console.log(`${_libra[indexRelationship]}.`);
    } else if (sign === 'Scorpio') {
        console.log(`${_scorpio[indexDisposition]}.`);
        console.log(`${_scorpio[indexJob]}.`);
        console.log(`${_scorpio[indexRelationship]}.`);
    } else if (sign === 'Sagittarius') {
        console.log(`${_sagittarius[indexDisposition]}.`);
        console.log(`${_sagittarius[indexJob]}.`);
        console.log(`${_sagittarius[indexRelationship]}.`);
    } else if (sign === 'Capricorn') {
        console.log(`${_capricorn[indexDisposition]}.`);
        console.log(`${_capricorn[indexJob]}.`);
        console.log(`${_capricorn[indexRelationship]}.`);
    } else if (sign === 'Aquarius') {
        console.log(`${_aquarius[indexDisposition]}.`);
        console.log(`${_aquarius[indexJob]}.`);
        console.log(`${_aquarius[indexRelationship]}.`);
    } else if (sign === 'Pisces') {
        console.log(`${_pisces[indexDisposition]}.`);
        console.log(`${_pisces[indexJob]}.`);
        console.log(`${_pisces[indexRelationship]}.`);
    }

}


const finalGenerator = (birthMonth, birthDay) => {
convertBirthday(birthMonth,birthDay);
getCurrentThird();
indexGenerator();
generateHoroscope();
}

finalGenerator(12,18);



