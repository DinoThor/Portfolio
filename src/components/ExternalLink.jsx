import { FaExternalLinkAlt } from "react-icons/fa";

function ExternalLink({ title, url }) {
	return (
		<div className="flex flex-row self-center items-center">
			<e className="font-mono font-bold text-sm text-blue">{title}</e>
			<a href={url} target="_blank"><FaExternalLinkAlt className="ml-1" /></a>
		</div>
	)
}

export default ExternalLink;