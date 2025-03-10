/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.</li>\n<li>Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.</li>\n<li>Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.</li>\n<li>Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.</li>\n<li>Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events.</li>\n</ul>";

				const frontmatter = {"title":"Intern","date":"2023 Jan - 2023 Sep","url":"http://atawajof.dz/vonilzor","location":"WHF","org":"Great Learning","tags":["Java","Problem Solving","Frontend Development"]};
				const file = "/Users/MA20465211/Desktop/cv-1/cv/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.\n- Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.\n- Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.\n- Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.\n- Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events.\n";
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
