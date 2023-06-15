import React from "react";
import {User} from "../../lib/types/dto/user.dto";
import UserIcon from "../../lib/icons/UserIcon";
import { PrimaryButton } from "../Button";
import { Checkbox } from "../Checkbox";
import { MAIN_COLOR } from "../const/colors";
import { Input } from "../Input";
import { Section } from "../Section";
import { Text } from "../Text";
import { BasePopup } from "./BasePopup";
import { useFormik } from "formik";

import styles from "./ProfileEditPopup.module.scss";

interface IProps {
	user: User;
}

export const ProfileEditPopup = (props: IProps) => {
	const { user } = props;
	const {
		user_name,
		user_patronymic,
		user_surname,
		user_isu_number,
		is_russian_citizenship,
	} = user;
	const formik = useFormik({
		initialValues: {
			phone: "",
			birth_date: "",
			address: "",
			vk_link: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<BasePopup className={styles.popup}>
			<Section margin={36}>
				<Text as={"h2"}>
					<UserIcon color={MAIN_COLOR} /> Профиль
				</Text>
			</Section>
			<Section className={styles.content} margin={0}>
				<div className={styles.form}>
					<div className={styles.fields}>
						<div className={styles.row}>
							<Input label="Имя" className={styles.input} disabled>
								{user_name}
							</Input>
							<Input label="Отчество" className={styles.input} disabled>
								{user_patronymic}
							</Input>
						</div>
						<div className={styles.row}>
							<Input label="Фамилия" className={styles.input} disabled>
								{user_surname}
							</Input>
							<Input
								label="Номер телефона"
								className={styles.input}
								onChange={formik.handleChange}
								id="phone"
								name="phone"
							>
								{formik.values.phone}
							</Input>
						</div>
						<div className={styles.row}>
							<Input
								label="Дата рождения"
								className={styles.input}
								onChange={formik.handleChange}
								id="birth_date"
								name="birth_date"
							>
								{formik.values.birth_date}
							</Input>
							<Input label="Номер ИСУ" className={styles.input} disabled>
								{String(user_isu_number)}
							</Input>
							<Input label="Гражданство" className={styles.input} disabled>
								{is_russian_citizenship ? "РФ" : "Иностранное"}
							</Input>
						</div>
						<div className={styles.row}>
							<Input
								label="Адрес регистрации"
								className={styles.input}
								onChange={formik.handleChange}
								id="address"
								name="address"
							>
								{formik.values.address}
							</Input>
						</div>
						<div className={styles.row}>
							<Input
								label="Ссылка на страницу в VK"
								className={styles.input}
								onChange={formik.handleChange}
								id="vk_link"
								name="vk_link"
							>
								{formik.values.vk_link}
							</Input>
						</div>
					</div>
					<div className={styles.agreeLabel}>
						<Checkbox defaultStatus={true} disabled>
              Согласен на обработку персональных данных
						</Checkbox>
					</div>
					<div className={styles.actions}>
						<PrimaryButton>Сохранить</PrimaryButton>
					</div>
				</div>
			</Section>
		</BasePopup>
	);
};
