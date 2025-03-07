/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dynamic Front End Developer with experience at Wipro, proficient in JavaScript and React. Expertly crafted user-centric websites and integrated APIs, enhancing functionality and user experience. Proficient in leveraging React.js for dynamic front-end solutions and employing Redux for efficient state management, ensuring seamless and high-performance application experiences. Committed to delivering scalable solutions that meet user needs and business objectives.</p>";

				const frontmatter = {"title":"about","name":"Mani Babu Miriyala","designation":"Frontend Developer","location":"India, Hyderabad","pronouns":"he/him","website":"http://tafutza.hn/kos"};
				const file = "/Users/MA20465211/Desktop/cv-1/cv/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nDynamic Front End Developer with experience at Wipro, proficient in JavaScript and React. Expertly crafted user-centric websites and integrated APIs, enhancing functionality and user experience. Proficient in leveraging React.js for dynamic front-end solutions and employing Redux for efficient state management, ensuring seamless and high-performance application experiences. Committed to delivering scalable solutions that meet user needs and business objectives.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
