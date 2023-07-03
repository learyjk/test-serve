const response = await fetch(`https://comment-bae-3fa3e.web.app/api/comments/list?hostname=comment-bae-client.webflow.io&pathname=%2Fpost%2F20-myths-about-web-design`);
const commentData = await response.json();
const comments = commentData;
