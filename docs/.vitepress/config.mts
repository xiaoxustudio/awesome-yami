import { defineConfig } from 'vitepress';
import accessGames from '../../src/access.json';
import newsList from '../../src/news.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	title: 'Awesome Yami',
	description: '优秀的Yami游戏合集',
	lang: 'zh',
	lastUpdated: true,
	base: '/awesome-yami/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: '合集', link: '/intro' },
			{ text: '寄语', link: '/say' },
			{ text: '新闻', link: `/${newsList.newsitems[0].gid}` },
			{
				text: '官方群：3992050',
				link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=a6c5d88cWnlgM-HCMgu8zL7FiVNSBExA&authKey=ylUAHiGeKvvaG5Mh3aBnqhW3VmXnvYLs5aiT%2B4nmk3gPvJ6cqRGK27mpmYZCtX4x&noverify=0&group_code=3992050'
			}
		],
		footer: {
			copyright: 'Copyright：❤️ Contributors and Game developers ❤️',
			message: '官方群：3992050'
		},
		sidebar: [
			{
				text: '合集',
				link: '/intro',
				items: [
					...accessGames.map((_, v) => ({
						text: accessGames[v].name,
						link: `/${accessGames[v].id}`
					})),
					{
						text: '加入我们',
						link: '/join us'
					}
				]
			},
			{
				text: '寄语',
				link: `/say`
			},
			{
				text: '引擎新闻',
				link: '',
				items: [
					...newsList.newsitems.map((_, v) => ({
						text: newsList.newsitems[v].title,
						link: `/${newsList.newsitems[v].gid}`
					}))
				]
			}
		],

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/Open-Yami-Community/awesome-yami'
			}
		]
	},

	vite: {
		optimizeDeps: {
			exclude: [
				'@nolebase/vitepress-plugin-enhanced-readabilities/client',
				'vitepress',
				'@nolebase/ui'
			]
		},
		ssr: {
			noExternal: [
				'@nolebase/vitepress-plugin-enhanced-readabilities',
				'@nolebase/ui'
			]
		}
	}
});
