export type TIconLink = {
	href: string;
	title: string;
	target?: '_self' | '_blank' | '_parent' | '_top';
};

export interface IIconLinkProps extends TIconLink {
	children?: Snippet | undefined;
}
