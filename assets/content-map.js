// assets/content-map.js

const contentSections = [
  {
    id: 'sports',
    title: '体育赛事',
    keywords: ['华体会', '足球', '篮球', '网球'],
    summary: '涵盖国内外主要体育赛事资讯与实时比分。',
    url: 'https://official-panel-hth.com/sports'
  },
  {
    id: 'esports',
    title: '电子竞技',
    keywords: ['华体会', 'LOL', 'Dota2', 'CS:GO', '王者荣耀'],
    summary: '最新的电竞赛事、战队动态与赛事预测。',
    url: 'https://official-panel-hth.com/esports'
  },
  {
    id: 'live',
    title: '直播频道',
    keywords: ['华体会', '直播', '解说', '互动'],
    summary: '7x24小时不间断高清直播，专业解说与实时互动。',
    url: 'https://official-panel-hth.com/live'
  },
  {
    id: 'promotions',
    title: '优惠活动',
    keywords: ['华体会', '红包', '返利', '抽奖'],
    summary: '最新优惠活动、会员福利与限时奖励。',
    url: 'https://official-panel-hth.com/promotions'
  },
  {
    id: 'help',
    title: '帮助中心',
    keywords: ['华体会', '注册', '充值', '提款', '客服'],
    summary: '常见问题解答、操作指南与客服支持。',
    url: 'https://official-panel-hth.com/help'
  }
];

function searchSections(query) {
  if (!query || typeof query !== 'string') {
    return [];
  }
  const lowerQuery = query.toLowerCase().trim();
  return contentSections.filter(section => {
    const keywordMatch = section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const summaryMatch = section.summary.toLowerCase().includes(lowerQuery);
    return keywordMatch || titleMatch || summaryMatch;
  });
}

function getSectionById(id) {
  return contentSections.find(section => section.id === id) || null;
}

function getAllKeywords() {
  const keywordSet = new Set();
  contentSections.forEach(section => {
    section.keywords.forEach(kw => keywordSet.add(kw));
  });
  return Array.from(keywordSet);
}

function generateSectionHtml(section) {
  return `<div class="content-section" data-id="${section.id}">
    <h2>${section.title}</h2>
    <p>${section.summary}</p>
    <ul class="keyword-list">
      ${section.keywords.map(kw => `<li class="keyword-item">${kw}</li>`).join('')}
    </ul>
    <a href="${section.url}" target="_blank" rel="noopener noreferrer">查看详情</a>
  </div>`;
}

function renderAllSections() {
  return contentSections.map(section => generateSectionHtml(section)).join('\n');
}

window.contentMap = {
  sections: contentSections,
  search: searchSections,
  getById: getSectionById,
  allKeywords: getAllKeywords(),
  render: renderAllSections
};