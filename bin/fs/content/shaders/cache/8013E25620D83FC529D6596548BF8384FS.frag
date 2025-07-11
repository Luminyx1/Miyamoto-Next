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

layout(location = 2) in vec4 PARAM_2;
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
    RVar[0u] = PARAM_2;
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_1;
    RVar[3u] = PARAM_3;
    if (stateVar == 0)
    {
        RVar[3u] = vec4(texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy).w, RVar[3u].y, RVar[3u].z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _70 = RVar[0u].w;
        float _72 = RVar[3u].x;
        float _75 = (_70 * _72) + uintBitsToFloat(0u);
        float _88 = (CBUFFER_1.values[4].z * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _94 = (CBUFFER_1.values[4].y * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _100 = (CBUFFER_1.values[4].x * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].x = _75;
        RVar[123u].y = _88;
        RVar[123u].z = _94;
        RVar[123u].w = _100;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _111 = clamp(_100 + uintBitsToFloat(0u), 0.0, 1.0);
        float _113 = RVar[2u].z;
        float _115 = RVar[2u].z;
        RVar[127u].x = _111;
        RVar[127u].z = clamp(_88 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(_94 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[3u].w = clamp(_75 + uintBitsToFloat(0u), 0.0, 1.0);
        float _132 = RVar[2u].x;
        float _134 = RVar[2u].y;
        float _139 = RVar[2u].x;
        float _141 = RVar[2u].y;
        float _157 = RVar[1u].z;
        float _159 = RVar[127u].z;
        float _163 = RVar[1u].y;
        float _165 = RVar[127u].w;
        float _170 = inversesqrt(dot(vec4(_132, _134, _113 * _115, uintBitsToFloat(2147483648u)), vec4(_139, _141, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[1u].x + (-_111)) * RVar[1u].w) + RVar[127u].x;
        RVar[127u].x = _170;
        float _180 = RVar[1u].w;
        float _182 = RVar[127u].w;
        float _186 = RVar[1u].w;
        float _188 = RVar[127u].z;
        float _192 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _170) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_163 + (-_165)) * _180) + _182;
        RVar[3u].z = ((_157 + (-_159)) * _186) + _188;
        RVar[0u].y = (_192 * _170) + uintBitsToFloat(1056964608u);
        float _201 = RVar[2u].z;
        float _203 = RVar[127u].x;
        float _206 = (_201 * _203) + uintBitsToFloat(1056964608u);
        RVar[0u].z = _206;
        float _211 = RVar[0u].y;
        float _213 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _211;
        RVar[1u].z = _206;
        RVar[1u].w = _213;
        float _221 = RVar[3u].y;
        float _223 = RVar[3u].z;
        float _225 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _221;
        RVar[0u].z = _223;
        RVar[0u].w = _225;
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
    uint _301 = PS_PUSH.alphaFunc >> 8u;
    if (_301 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_301 == 2u)
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
    uint _329 = PS_PUSH.alphaFunc >> 8u;
    if (_329 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_329 == 2u)
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