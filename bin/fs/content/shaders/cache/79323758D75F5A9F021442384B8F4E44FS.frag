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
        RVar[2u] = vec4(texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy).w, RVar[2u].y, RVar[2u].z, RVar[2u].w);
    }
    if (stateVar == 0)
    {
        float _75 = RVar[2u].x;
        float _78 = (CBUFFER_1.values[4].w * _75) + uintBitsToFloat(0u);
        float _85 = (CBUFFER_1.values[4].z * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _91 = (CBUFFER_1.values[4].y * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _97 = (CBUFFER_1.values[4].x * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].x = _78;
        RVar[123u].y = _85;
        RVar[123u].z = _91;
        RVar[123u].w = _97;
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _108 = clamp(_97 + uintBitsToFloat(0u), 0.0, 1.0);
        float _110 = RVar[1u].z;
        float _112 = RVar[1u].z;
        RVar[127u].x = _108;
        RVar[127u].z = clamp(_85 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(_91 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[3u].w = clamp(_78 + uintBitsToFloat(0u), 0.0, 1.0);
        float _129 = RVar[1u].x;
        float _131 = RVar[1u].y;
        float _136 = RVar[1u].x;
        float _138 = RVar[1u].y;
        float _154 = RVar[0u].z;
        float _156 = RVar[127u].z;
        float _160 = RVar[0u].y;
        float _162 = RVar[127u].w;
        float _167 = inversesqrt(dot(vec4(_129, _131, _110 * _112, uintBitsToFloat(2147483648u)), vec4(_136, _138, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[0u].x + (-_108)) * RVar[0u].w) + RVar[127u].x;
        RVar[127u].x = _167;
        float _177 = RVar[0u].w;
        float _179 = RVar[127u].w;
        float _183 = RVar[0u].w;
        float _185 = RVar[127u].z;
        float _189 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _167) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_160 + (-_162)) * _177) + _179;
        RVar[3u].z = ((_154 + (-_156)) * _183) + _185;
        RVar[2u].y = (_189 * _167) + uintBitsToFloat(1056964608u);
        float _198 = RVar[1u].z;
        float _200 = RVar[127u].x;
        float _203 = (_198 * _200) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _203;
        float _208 = RVar[2u].y;
        float _210 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _208;
        RVar[1u].z = _203;
        RVar[1u].w = _210;
        float _218 = RVar[3u].y;
        float _220 = RVar[3u].z;
        float _222 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _218;
        RVar[0u].z = _220;
        RVar[0u].w = _222;
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
    uint _298 = PS_PUSH.alphaFunc >> 8u;
    if (_298 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_298 == 2u)
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
    uint _326 = PS_PUSH.alphaFunc >> 8u;
    if (_326 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_326 == 2u)
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