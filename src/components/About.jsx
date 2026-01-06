import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
	return (
		<section id="about" className="bg-white py-20">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutSvg} alt="about section" className="w-full h-64" />
				<article>
					<SectionTitle text="code & coffee" />
					<p className="mt-8 text-slate-600 leading-loose">
						Hello! I'm Andrei, a passionate Front-End Developer dedicated to
						crafting engaging and user-friendly web experiences. With a keen eye
						for design and a love for coding, I specialize in transforming ideas
						into interactive realities. When I'm not coding, you'll find me
						exploring the latest tech trends or enjoying a good cup of coffee.
						Let's build something amazing together!
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
