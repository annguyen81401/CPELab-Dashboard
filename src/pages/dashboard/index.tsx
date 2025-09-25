import { Card, Col, Row, Typography, Select, DatePicker, Space, Button } from "antd";
import Color from "color";
import glass_bag from "@/assets/images/glass/ic_glass_bag.png";
import glass_buy from "@/assets/images/glass/ic_glass_buy.png";
import glass_message from "@/assets/images/glass/ic_glass_message.png";
import glass_users from "@/assets/images/glass/ic_glass_users.png";
import modem from "@/assets/images/glass/ic_modem.png";
import { Iconify } from "@/components/icon";
import ChartBar from "@/pages/components/chart/view/chart-bar";
import ChartMixed from "@/pages/components/chart/view/chart-mixed";
import ChartPie from "@/pages/components/chart/view/chart-pie";
import ChartRadar from "@/pages/components/chart/view/chart-radar";
import { useThemeToken } from "@/theme/hooks";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

import AnalysisCard from "./analysis-card";
import AnalysisNews from "./analysis-news";
import AnalysisOrderTimeline from "./analysis-order-timeline";
import AnalysisTasks from "./analysis-tasks";
import AnalysisTrafficCard from "./analysis-traffic-card";

import { overviewApi } from "@/api/services/overviews";
import { List } from "@/api/services/global";

const { RangePicker } = DatePicker;

const aliasMap: Record<string, string> = {
	"AC1000F": "AC1000F",
	"AX1800C": "AX1800C",
	"AX3000HI": "AX3000HI",
	"G-97RG3": "G-97RG3",
	"G-97RG6W": "AC1000C V2",
	"F6201B-V9.3": "AX3000GZ V2",
	"AC1000HI": "AC1000HI",
	"F6600-V9": "AX1800GZ",
	"G-97D2": "G-97D2",
	"H3601-V9": "AX1800AZ",
	"AX3000HV2": "AX3000H V2",
	"AP-AX3000C": "AX3000C",
	"AP-AX3000CV2": "AX3000C V2",
	"F671Y-V9": "AC1000Z",
	"N300C": "N300C",
	"AX1500C": "AX1500C",
	"F6600P-V9": "AX3000GZ",
	"H196A-V9": "AC1200Z",
	"H3601P-V9": "AX3000AZ",
	"AC1000CV3": "AC1000C V3",
	"G-97RG6M": "AC1000C",
	"97MA": "AC1200C",
	"AX3000S": "AX3000S",
  };

function Analysis() {
	const theme = useThemeToken();
	const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
	const [models, setModels] = useState<string[]>([]);
	const [dateRange, setDateRange] = useState<[string, string] | null>(null);
	const [chartData, setChartData] = useState<any>(null);

	useEffect(() => {
		const fetchModels = async () => {
		  try {
			const res = await List.getModels();
			const modelData = res.data || [];
	  
			const mapped = modelData.map((item: any) => ({
			  value: item.model_id_str, // để gọi API backend
			  label: aliasMap[item.model_name] || item.model_name, // hiển thị alias
			}));
	  
			setOptions(mapped);
		  } catch (err) {
			console.error("Error fetching models:", err);
		  }
		};
	  
		fetchModels();
	  }, []);

	const handleFetch = async () => {
		if (!dateRange || models.length === 0) return;
	
		try {
		  const res = await overviewApi.getOverviewsCPESModelChanges({
			from_date: dateRange[0],
			to_date: dateRange[1],
			models: models,
		  });
		  setChartData(res.data);
		} catch (err) {
		  console.error("Fetch error:", err);
		}
	};
	return (
		<div className="p-2">
			<Typography.Title level={2}>Welcome to Dashboard</Typography.Title>
			<Row gutter={[16, 16]} justify="center">
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={modem}
						title="Total CPE"
						subtitle=""
						number="5 1544 401"
						style={{
							color: "#AEB9E1",
							background: theme.colorBgContainer
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_users}
						title="Online"
						subtitle=" (Last 3 days)"
						number="4 271 642"
						style={{
							color: "#AEB9E1",
							background: theme.colorBgContainer
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_users}
						title="Online"
						subtitle=" (Last 10 days)"
						number="4 998 600"
						style={{
							color: "#AEB9E1",
							background: theme.colorBgContainer
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_message}
						title="Total Models"
						subtitle=""
						number="29"
						style={{
							color: "#AEB9E1",
							background: theme.colorBgContainer
						}}
					/>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-8" justify="center">
				<Col span={24} lg={12} xl={16}>
				<Card className="mb-4">
				<Space>
					<Select
						mode="multiple"
						style={{ width: 300 }}
						placeholder="Select models"
						value={models}
						onChange={setModels}
						options={options}
					/>

					<RangePicker
						format="YYYY-MM-DD"
						onChange={(dates) => {
						if (dates) {
							setDateRange([
							dayjs(dates[0]).format("YYYY-MM-DD"),
							dayjs(dates[1]).format("YYYY-MM-DD"),
							]);
						} else {
							setDateRange(null);
						}
						}}
					/>

					<Button type="primary" onClick={handleFetch}>
						Apply
					</Button>
					</Space>
				</Card>
					<Card title="Daily Models Growth">
						<ChartMixed />
					</Card>
				</Col>
				{/* <Col span={24} lg={12} xl={8}>
					<Card title="Current Visits">
						<ChartPie />
					</Card>
				</Col> */}
			</Row>

			{/* <Row gutter={[16, 16]} className="mt-8" justify="center">
				<Col span={24} lg={12} xl={16}>
					<Card title="Conversion Rates">
						<ChartBar />
					</Card>
				</Col>
				<Col span={24} lg={12} xl={8}>
					<Card title="Current Subject">
						<ChartRadar /> 
					</Card>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-8">
				<Col span={24} lg={12} xl={16}>
					<Card title="News">
						<AnalysisNews />
					</Card>
				</Col>
				<Col span={24} lg={12} xl={8}>
					<Card title="Order Timeline">
						<AnalysisOrderTimeline />
					</Card>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="my-8">
				<Col span={24} lg={12} xl={8}>
					<Card title="Traffic by Site">
						<Row gutter={[16, 16]}>
							<Col span={12}>
								<AnalysisTrafficCard
									icon={
										<Iconify icon="bxl:facebook" size={32} color="#1877f2" />
									}
									title="1.95k"
									subtitle="FaceBook"
								/>
							</Col>

							<Col span={12}>
								<AnalysisTrafficCard
									icon={
										<Iconify
											icon="ant-design:google-outlined"
											size={32}
											color="#df3e30"
										/>
									}
									title="9.12k"
									subtitle="Google"
								/>
							</Col>

							<Col span={12}>
								<AnalysisTrafficCard
									icon={
										<Iconify
											icon="eva:linkedin-fill"
											size={32}
											color="#006097"
										/>
									}
									title="6.98k"
									subtitle="Linkedin"
								/>
							</Col>

							<Col span={12}>
								<AnalysisTrafficCard
									icon={
										<Iconify
											icon="eva:twitter-fill"
											size={32}
											color="#1c9cea"
										/>
									}
									title="8.49k"
									subtitle="Twitter"
								/>
							</Col>
						</Row>
					</Card>
				</Col>

				<Col span={24} lg={12} xl={16}>
					<Card title="Tasks">
						<AnalysisTasks />
					</Card>
				</Col>
			</Row> */}
		</div>
	);
}

export default Analysis;
