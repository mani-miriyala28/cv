/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Developed and maintained user-facing websites using HTML, CSS, JavaScript and React.Js</li>\n<li>Collaborated closely with the backend developers to integrate API calls into front-end codebase.</li>\n<li>Created UI components with reusable codes for better use experience.</li>\n<li>Used Version Control systems such as Git to manage source code repositories in a team environment.</li>\n<li>Designed and developed new features and functionality for existing systems.</li>\n<li>Utilized Jira for Effective project management, progress tracking and sprint management</li>\n<li>Managed Source code, attended code reviews and collaborated with team members using Git Hub</li>\n<li>Implemented responsive design principles to ensure cross-platform compatibility of web pages.</li>\n</ul>";

				const frontmatter = {"title":"Frontend Developer","date":"March,2023 - Present","location":"Hyderabad, Telangana","org":"Wipro","tags":["HTML","CSS","JavaScript","React"]};
				const file = "/Users/MA20465211/Desktop/cv-1/cv/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- Developed and maintained user-facing websites using HTML, CSS, JavaScript and React.Js \n- Collaborated closely with the backend developers to integrate API calls into front-end codebase. \n- Created UI components with reusable codes for better use experience. \n- Used Version Control systems such as Git to manage source code repositories in a team environment. \n- Designed and developed new features and functionality for existing systems. \n- Utilized Jira for Effective project management, progress tracking and sprint management \n- Managed Source code, attended code reviews and collaborated with team members using Git Hub \n- Implemented responsive design principles to ensure cross-platform compatibility of web pages. \n";
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
