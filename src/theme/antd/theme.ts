import type { ThemeConfig } from "antd";

import type { ThemeColorPresets } from "@/type/enum";
/**
 * Antd theme editor: https://ant.design/theme-editor-cn
 */
const customThemeTokenConfig: ThemeConfig["token"] = {
	colorSuccess: "#22C55E",
	colorWarning: "#FFAB00",
	colorError: "#FF5630",
	colorInfo: "#00B8D9",

	// 线性化
	wireframe: false,

	borderRadiusSM: 2,
	borderRadius: 4,
	borderRadiusLG: 8,
};

const customComponentConfig: ThemeConfig["components"] = {
	Breadcrumb: {
		fontSize: 12,
		separatorMargin: 4,
	},
	Menu: {
		fontSize: 14,
		colorFillAlter: "transparent",
		itemColor: "rgb(145, 158, 171)",
		motionDurationMid: "0.125s",
		motionDurationSlow: "0.125s",
	},
};

const colorPrimarys: {
	[k in ThemeColorPresets]: string;
} = {
	default: "#033d99",
	cyan: "#078DEE",
	purple: "#7635DC",
	blue: "#2065D1",
	orange: "#FDA92D",
	red: "#FF3030",
};

const themeModeToken: Record<"dark" | "light", ThemeConfig> = {
	dark: {
		token: {
			colorBgLayout: "#161c24",
			colorBgContainer: "#0b1739",
			colorBgElevated: "#060e23",
		},
		components: {
			Layout: {
				siderBg: "#060e23",
			},
			Menu: {
				darkItemBg: "#081028",
			},
			Modal: {
				headerBg: "#0b1739",
				contentBg: "#0b1739",
				footerBg: "#0b1739",
			},
			Notification: {},
		},
	},
	light: {
		components: {
			Layout: {
				siderBg: "#161c24",
			},
			Menu: {
				darkItemBg: "#161c24",
			},
		},
	},
};

export {
	customThemeTokenConfig,
	customComponentConfig,
	colorPrimarys,
	themeModeToken,
};
