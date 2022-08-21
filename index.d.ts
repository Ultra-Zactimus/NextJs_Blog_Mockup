export default PortableText;
export function blockContentToPlainText(blocks?: [any]): string;

/**
 * 
 * @param {object} props
 * @param {object} props.content
 * @param {string} props.className
 * @param {object} props.serializers
 * @returns
 */

declare function PortableText({ content, className, serializers, ...additonalOptions }: {
  content: [object];
  className: string;
  serializers: object;
  dataset: string;
  projectId: string;
}): any;

declare namespace PortableText {
  namespace propTypes {
    const content: any;
    const className: any;
    const serializers: any;
    const dataset: string;
    const projectId: string;
  }
}