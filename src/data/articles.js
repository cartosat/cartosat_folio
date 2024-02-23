import React from "react";

function article_1() {
	return {
		date: "2 Jan 2021",
		title: "Mathematics Of Linear Regression",
		description:
			"Hello Guys in this post we will cover whole mathematical intuition of linear regression.",
		keywords: [
			"Linear Regression",
			"Mathematics Of Linear Regression",
			"Vaibhav W",
			"Vaibhav Wagaskar",
			"Machine Learning",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
