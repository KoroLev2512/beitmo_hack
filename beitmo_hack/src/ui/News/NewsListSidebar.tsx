import cls from "./styles.module.scss";
import {useNewsStore} from "../../lib/store/newsStore";
import classNames from "classnames";
import {Text} from "../Text";
import {Section} from "../Section";
import {DateTime} from "luxon";
import StarIcon from "../../lib/icons/StarIcon";

interface INewsListSidebarProps {
    className?: string;
}

export const NewsListSidebar = (props: INewsListSidebarProps) => {
	const { className } = props;

	const news = useNewsStore(state => state.news);
	console.log(news);

	return (
		<div
			className={classNames(cls.NewsListSidebar, {}, [className])}
		>
			{news?.map(item => (
				<div
					className={classNames(cls.NewsListSidebar_item, {}, [className])}
					key={item._id}
				>
					<Section margin={10}>
						<Text as="h5">
							{item.user.fullName}
						</Text>
					</Section>
					<Section margin={10}>
						<Text as="p">
							{item.text}
						</Text>
					</Section>
					<Section margin={0}>
						<div className={classNames(cls.NewsListSidebar_item_footer, {}, [className])}>
							<Text as="p">
								{DateTime.fromISO(`${item.createdAt}`).toLocaleString()}
							</Text>
							<Text as="p">
								<StarIcon width={26} height={26}/> {item.likes}
							</Text>
						</div>
					</Section>
				</div>
			))}
		</div>
	);
};
