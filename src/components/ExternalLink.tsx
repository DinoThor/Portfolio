import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function ExternalLink({ title, url }: {title: string, url: string}) {
	return (
		<div className="flex flex-row self-center items-center">
			<a className="font-mono font-bold text-sm text-blue">{title}</a>
			<a href={url} target="_blank"><FaExternalLinkAlt className="ml-1" /></a>
		</div>
	)
}

export default ExternalLink;