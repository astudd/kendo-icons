function svgTsTemplate( options ) {
    const { iconName, iconTsName, iconSvgContent } = options;

    return `import { SVGIcon } from '../svg-icon.interface';

export const ${iconTsName}: SVGIcon = {
    name: '${iconName}',
    content: '<path d="${iconSvgContent}" />',
    viewBox: '0 0 512 512'
}\n`;
}

function indexTsTemplate( options ) {

    return `export { SVGIcon } from './svg-icon.interface';

${options.map(icon => `export { ${icon.iconTsName} } from './icons/${icon.iconName}';`).join('\n')}\n`;
}

function svgCsTemplate( options ) {
    const { iconName, iconCsName, iconSvgContent } = options;

    return `namespace Telerik.SvgIcons
{
    public class ${iconCsName} : SvgIconBase
    {
        public ${iconCsName}()
        {
            Name = "${iconName}";
            Content = "<path d=\\"${iconSvgContent}\\" />";
            ViewBox = "0 0 512 512";
        }
    }
}\n`;
}

function indexCsTemplate( options ) {

    return `// This file is auto-generated by the build process.
namespace Telerik.SvgIcons
{
    public static class SvgIcon
    {${options.map(icon => `
        public static ISvgIcon ${icon.iconCsName} => new ${icon.iconCsName}();`).join('')}
    }
}\n`;
}


module.exports.svgTsTemplate = svgTsTemplate;
module.exports.indexTsTemplate = indexTsTemplate;
module.exports.svgCsTemplate = svgCsTemplate;
module.exports.indexCsTemplate = indexCsTemplate;
