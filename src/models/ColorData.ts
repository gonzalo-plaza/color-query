export interface ColorData {
    hex: HEX,
    rgb: RGB,
    hsl: HSL,
    hsv: HSV,
    name: Name,
    cmyk: CMYK,
    XYZ: XYZ,
    image: Image,
    contrast: Contrast,
    _links: Links,
    _embedded: Object
}

interface HEX {
    value: 'string',
    clean: 'string'
}

interface RGBFraction {
    r: number,
    g: number,
    b: number,
}

interface RGB {
    fraction: RGBFraction,
    r: number,
    g: number,
    b: number,
    value: string
}

interface HSLFraction{
    h: number,
    s: number,
    l: number,
}

interface HSL{
    fraction: HSLFraction,
    h: number,
    s: number,
    l: number,
    value: string
}

interface HSVFraction {
    h: number,
    s: number,
    v: number
}

interface HSV {
    fraction: HSVFraction,
    h: number,
    s: number,
    value: string,
    v: number
}

interface Name{
    value: string,
    closest_named_hex: string,
    exact_match_name: boolean,
    distance: number
}

interface CMYKFraction {
    c: number,
    m: number,
    y: number,
    k: number
}

interface CMYK {
    fraction: CMYKFraction,
    value: string,
    c: number,
    m: number,
    y: number,
    k: number
}

interface XYZFraction{
    X: number,
    Y: number,
    Z: number
}

interface XYZ {
    fraction: XYZFraction,
    value: string,
    X: number,
    Y: number,
    Z: number
}

interface Image{
    bare: string,
    named: string
}

interface Contrast{
    value: string
}

interface Href{
    href: string
}
interface Links {
    self: Href
}
