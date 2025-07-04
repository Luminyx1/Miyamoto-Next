#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;

layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 2) in vec4 PARAM_2;
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
    RVar[0u] = PARAM_1;
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_2;
    if (stateVar == 0)
    {
        vec4 _56 = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[2u] = vec4(_56.x, _56.y, _56.z, RVar[2u].w);
    }
    if (stateVar == 0)
    {
        float _66 = RVar[2u].z;
        float _71 = (_66 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _73 = RVar[2u].y;
        float _77 = (_73 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _79 = RVar[2u].x;
        float _83 = (_79 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].x = _71;
        RVar[123u].y = _77;
        RVar[123u].z = _83;
        RVar[3u].w = uintBitsToFloat(0u);
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _94 = RVar[1u].z;
        float _96 = RVar[1u].z;
        float _107 = clamp(_83 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].y = clamp(_71 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_77 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = _107;
        float _113 = RVar[1u].x;
        float _115 = RVar[1u].y;
        float _120 = RVar[1u].x;
        float _122 = RVar[1u].y;
        float _138 = RVar[0u].z;
        float _140 = RVar[127u].y;
        float _144 = RVar[0u].y;
        float _146 = RVar[127u].z;
        float _151 = inversesqrt(dot(vec4(_113, _115, _94 * _96, uintBitsToFloat(2147483648u)), vec4(_120, _122, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[0u].x + (-_107)) * RVar[0u].w) + RVar[127u].w;
        RVar[127u].x = _151;
        float _161 = RVar[0u].w;
        float _163 = RVar[127u].z;
        float _167 = RVar[0u].w;
        float _169 = RVar[127u].y;
        float _173 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _151) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_144 + (-_146)) * _161) + _163;
        RVar[3u].z = ((_138 + (-_140)) * _167) + _169;
        RVar[2u].y = (_173 * _151) + uintBitsToFloat(1056964608u);
        float _182 = RVar[1u].z;
        float _184 = RVar[127u].x;
        float _187 = (_182 * _184) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _187;
        float _192 = RVar[2u].y;
        float _194 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _192;
        RVar[1u].z = _187;
        RVar[1u].w = _194;
        float _202 = RVar[3u].y;
        float _204 = RVar[3u].z;
        float _206 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _202;
        RVar[0u].z = _204;
        RVar[0u].w = _206;
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
    uint _282 = PS_PUSH.alphaFunc >> 8u;
    if (_282 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_282 == 2u)
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
    uint _310 = PS_PUSH.alphaFunc >> 8u;
    if (_310 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_310 == 2u)
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