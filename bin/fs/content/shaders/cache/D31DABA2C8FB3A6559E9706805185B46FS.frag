#version 430

layout(std140) uniform Mat
{
    vec4 values[41];
} CBUFFER_1;

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;

layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
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
    RVar[0u] = PARAM_0;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_3;
    if (stateVar == 0)
    {
        RVar[2u] = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
    }
    if (stateVar == 0)
    {
        float _73 = RVar[2u].w;
        float _76 = (CBUFFER_1.values[4].w * _73) + uintBitsToFloat(0u);
        float _80 = RVar[2u].z;
        float _83 = (CBUFFER_1.values[4].z * _80) + uintBitsToFloat(0u);
        float _87 = RVar[2u].y;
        float _90 = (CBUFFER_1.values[4].y * _87) + uintBitsToFloat(0u);
        float _94 = RVar[2u].x;
        float _97 = (CBUFFER_1.values[4].x * _94) + uintBitsToFloat(0u);
        RVar[123u].x = _76;
        RVar[123u].y = _83;
        RVar[123u].z = _90;
        RVar[123u].w = _97;
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _109 = clamp(_97 + uintBitsToFloat(0u), 0.0, 1.0);
        float _111 = RVar[1u].z;
        float _113 = RVar[1u].z;
        RVar[127u].x = _109;
        RVar[127u].z = clamp(_83 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(_90 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[3u].w = clamp(_76 + uintBitsToFloat(0u), 0.0, 1.0);
        float _130 = RVar[1u].x;
        float _132 = RVar[1u].y;
        float _137 = RVar[1u].x;
        float _139 = RVar[1u].y;
        float _155 = RVar[0u].z;
        float _157 = RVar[127u].z;
        float _161 = RVar[0u].y;
        float _163 = RVar[127u].w;
        float _168 = inversesqrt(dot(vec4(_130, _132, _111 * _113, uintBitsToFloat(2147483648u)), vec4(_137, _139, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[0u].x + (-_109)) * RVar[0u].w) + RVar[127u].x;
        RVar[127u].x = _168;
        float _178 = RVar[0u].w;
        float _180 = RVar[127u].w;
        float _184 = RVar[0u].w;
        float _186 = RVar[127u].z;
        float _190 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _168) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_161 + (-_163)) * _178) + _180;
        RVar[3u].z = ((_155 + (-_157)) * _184) + _186;
        RVar[2u].y = (_190 * _168) + uintBitsToFloat(1056964608u);
        float _199 = RVar[1u].z;
        float _201 = RVar[127u].x;
        float _204 = (_199 * _201) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _204;
        float _209 = RVar[2u].y;
        float _211 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _209;
        RVar[1u].z = _204;
        RVar[1u].w = _211;
        float _219 = RVar[3u].y;
        float _221 = RVar[3u].z;
        float _223 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _219;
        RVar[0u].z = _221;
        RVar[0u].w = _223;
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
    uint _299 = PS_PUSH.alphaFunc >> 8u;
    if (_299 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_299 == 2u)
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
    uint _327 = PS_PUSH.alphaFunc >> 8u;
    if (_327 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_327 == 2u)
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