#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 3) in vec4 PARAM_3;
layout(location = 0) out vec4 PIXEL_0;
layout(location = 1) out vec4 PIXEL_1;
layout (location = 2) out uint ItemID;
int stackIdxVar;
int stateVar;
vec4 RVar[128];
vec4 _pixelTmp;
vec4 _pixelTmp_1;

void main()
{
    stackIdxVar = 0;
    stateVar = 0;
    RVar[0u] = PARAM_2;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_0;
    RVar[3u] = PARAM_3;
    if (stateVar == 0)
    {
        vec4 _60 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_60.x, _60.y, _60.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _70 = RVar[2u].z;
        float _72 = RVar[2u].z;
        float _81 = RVar[3u].y;
        float _86 = RVar[3u].x;
        float _89 = clamp(_86 + uintBitsToFloat(0u), 0.0, 1.0);
        float _91 = RVar[0u].w;
        RVar[127u].y = clamp(RVar[3u].z + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_81 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = _89;
        RVar[3u].w = clamp(_91 + uintBitsToFloat(0u), 0.0, 1.0);
        float _117 = RVar[1u].x;
        RVar[126u].y = dot(vec4(RVar[2u].x, RVar[2u].y, _70 * _72, uintBitsToFloat(2147483648u)), vec4(RVar[2u].x, RVar[2u].y, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)));
        float _129 = RVar[1u].z;
        float _131 = RVar[127u].y;
        float _135 = RVar[1u].y;
        float _137 = RVar[127u].z;
        RVar[3u].x = ((_117 + (-_89)) * RVar[1u].w) + RVar[127u].w;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _150 = RVar[1u].w;
        float _152 = RVar[127u].y;
        float _156 = RVar[126u].y;
        float _159 = inversesqrt(_156) * 0.5;
        RVar[3u].y = ((_135 + (-_137)) * RVar[1u].w) + RVar[127u].z;
        RVar[3u].z = ((_129 + (-_131)) * _150) + _152;
        float _163 = RVar[2u].x;
        float _167 = (_163 * _159) + uintBitsToFloat(1056964608u);
        float _169 = RVar[2u].y;
        float _172 = (_169 * _159) + uintBitsToFloat(1056964608u);
        float _174 = RVar[2u].z;
        float _177 = (_174 * _159) + uintBitsToFloat(1056964608u);
        RVar[0u].x = _167;
        RVar[0u].y = _172;
        RVar[0u].z = _177;
        float _182 = RVar[0u].w;
        RVar[1u].x = _167;
        RVar[1u].y = _172;
        RVar[1u].z = _177;
        RVar[1u].w = _182;
        float _190 = RVar[3u].y;
        float _192 = RVar[3u].z;
        float _194 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _190;
        RVar[0u].z = _192;
        RVar[0u].w = _194;
    }
    switch (PS_PUSH.alphaFunc & 255u)
    {
        case 0u:
        {
            discard;
        }
        case 1u:
        {
            if (!(RVar[0u].w < PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 2u:
        {
            if (abs(RVar[0u].w - PS_PUSH.alphaRef) > 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 3u:
        {
            if (!(RVar[0u].w <= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 4u:
        {
            if (!(RVar[0u].w > PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 5u:
        {
            if (abs(RVar[0u].w - PS_PUSH.alphaRef) <= 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 6u:
        {
            if (!(RVar[0u].w >= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
    }
    _pixelTmp = RVar[0u];
    uint _270 = PS_PUSH.alphaFunc >> 8u;
    if (_270 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_270 == 2u)
        {
            _pixelTmp = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 1u) != 0u)
    {
        _pixelTmp *= vec4(_pixelTmp.www, 1.0);
    }
    if (PS_PUSH.uIsSelected != 0) PIXEL_0 = vec4(_pixelTmp.rgb * 0.5f + vec3(1.0f, 0.25f, 0.25f) * 0.5f, _pixelTmp.a); else PIXEL_0 = _pixelTmp; ItemID = PS_PUSH.uItemID;
    _pixelTmp_1 = RVar[1u];
    uint _298 = PS_PUSH.alphaFunc >> 8u;
    if (_298 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_298 == 2u)
        {
            _pixelTmp_1 = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 2u) != 0u)
    {
        _pixelTmp_1 *= vec4(_pixelTmp_1.www, 1.0);
    }
    PIXEL_1 = _pixelTmp_1;
}

 