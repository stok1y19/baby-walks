import Image from 'next/image';
import { cn } from '../../lib/utils';
import Container from '../container/Container';
import { FormSignUp } from '../form/Form';
import Styles from './Advantages.module.css';
import Cloud from '@images/general/cloud.webp';

const Advantages = () => {
	const data = {
		title: 'Весомые преимущества в пользу ИИ',
		list: [
			{
				title: 'Комплексный анализ',
				text: 'В отличие от мнений и субъективных рекомендаций, ИИ анализирует большой объём данных и научных исследований. Вы можете быть уверены, что советы основаны на проверенных фактах, а не на личном опыте одного человека и его предубеждениях. Искусственный интеллект учитывает последние тенденции в педиатрии, психологии и даже в питании, чтобы дать наиболее полное и глубокое понимание того, как обеспечить наилучший уход.',
			},
			{
				title: 'Инновационный опыт и преимущество в воспитании',
				text: 'Использование нашего курса не просто даст вам ценные навыки в уходе за ребёнком, но и сделает этот процесс незабываемым. Взаимодействуя с передовыми технологиями, вы будете на голову выше тех, кто придерживается традиционных методов. Этот опыт не только обогатит вашу жизнь новыми знаниями, но и даст вам ощущение уверенности и современности в роли родителя.',
			},
			{
				title: 'Контроль качества информации',
				text: 'Искусственный интеллект обладает способностью критически оценивать источники, из которых он берет информацию. Это обеспечивает высокий уровень достоверности и качества предлагаемых материалов.',
			},
			{
				title: 'Быстродействие и масштабируемость',
				text: 'ИИ может обрабатывать большие объёмы данных быстрее, чем человек, что позволяет предложить множество решений для различных сценариев ухода. Это особенно полезно в ситуациях, требующих быстрого и обдуманного решения.',
			},
			{
				title: 'Снижение риска ошибок',
				text: 'Искусственный интеллект исключает человеческий фактор вроде усталости, стресса или эмоциональной предвзятости, что минимизирует вероятность ошибок или неточностей в рекомендациях.',
			},
			{
				title: 'Без предвзятости и стереотипов',
				text: 'ИИ не имеет культурных или социальных предвзятостей и предлагает решения, исходя из объективных данных и научных исследований. Это особенно ценно в вопросах ухода за ребёнком, где существует множество мифов и стереотипов.',
			},
		],
		form: {
			title: 'Записаться на курс',
			noteText: 'Нажимая отправить вы соглашаетесь с политикой конфиденциальности',
		},
		cloud: {
			src: Cloud,
			alt: 'cloud',
		},
	};

	return (
		<section className={cn(Styles.advantages)}>
			<Container className={cn(Styles.container)}>
				<h2 className={cn(Styles.title, 'title title_h2 text-white')}>{data.title}</h2>
				<ul className={cn(Styles.list)}>
					{data.list.map((item, key) => (
						<li key={`__${key}__`} className={cn(Styles.item)}>
							<div className={cn(Styles.itemNum)}>{`0${key + 1}`}</div>
							<h3 className={cn(Styles.itemTitle, 'title title_h3')}>{item.title}</h3>
							<div className={cn(Styles.itemText, 'text ')}>{item.text}</div>
						</li>
					))}
				</ul>

				<FormSignUp className={cn(Styles.form)} />
			</Container>
			<figure className={cn(Styles.cloudLeft)}>
				<Image
					src={data.cloud.src}
					alt={data.cloud.alt}
					width={data.cloud.src.width}
					height={data.cloud.src.height}
					blurDataURL={data.cloud.src.blurDataURL}
					placeholder="blur"
				/>
			</figure>
		</section>
	);
};

export default Advantages;
