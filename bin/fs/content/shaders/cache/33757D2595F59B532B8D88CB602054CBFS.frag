#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map1;
uniform sampler2D tex_map0;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 3) in vec4 PARAM_3;
layout(location = 4) in vec4 PARAM_4;
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
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_64.x, _64.y, _64.z, RVar[4u].w);
        vec4 _79 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_79.x, _79.y, _79.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _89 = RVar[0u].w;
        float _95 = RVar[4u].z;
        float _100 = (_95 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _102 = RVar[4u].y;
        float _106 = (_102 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _108 = RVar[4u].x;
        float _112 = (_108 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].y = _100;
        RVar[123u].z = _106;
        RVar[123u].w = _112;
        RVar[5u].w = uintBitsToFloat(1065353216u);
        float _121 = RVar[0u].x;
        float _128 = RVar[0u].z;
        float _132 = RVar[0u].y;
        float _136 = RVar[2u].z;
        float _138 = RVar[2u].z;
        RVar[127u].y = clamp(clamp(_89 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _143 = RVar[3u].y;
        float _146 = (clamp(_132 + _106, 0.0, 1.0) * _143) + uintBitsToFloat(0u);
        float _148 = RVar[3u].x;
        float _151 = (clamp(_121 + _112, 0.0, 1.0) * _148) + uintBitsToFloat(0u);
        float _153 = RVar[3u].z;
        float _156 = (clamp(_128 + _100, 0.0, 1.0) * _153) + uintBitsToFloat(0u);
        float _158 = RVar[2u].y;
        float _160 = RVar[2u].y;
        float _162 = (_158 * _160) + (_136 * _138);
        RVar[123u].x = _146;
        RVar[123u].y = _151;
        RVar[123u].w = _156;
        RVar[122u].x = _162;
        float _170 = clamp(_156 + uintBitsToFloat(0u), 0.0, 1.0);
        float _173 = clamp(_146 + uintBitsToFloat(0u), 0.0, 1.0);
        float _176 = clamp(_151 + uintBitsToFloat(0u), 0.0, 1.0);
        float _178 = RVar[2u].x;
        float _180 = RVar[2u].x;
        float _182 = (_178 * _180) + _162;
        float _184 = RVar[127u].y;
        RVar[127u].x = _170;
        RVar[127u].y = _173;
        RVar[127u].z = _176;
        RVar[123u].w = _182;
        RVar[3u].w = clamp(_184 + uintBitsToFloat(0u), 0.0, 1.0);
        float _194 = RVar[4u].z;
        float _197 = (_194 * _170) + uintBitsToFloat(0u);
        float _199 = RVar[4u].y;
        float _202 = (_199 * _173) + uintBitsToFloat(0u);
        float _204 = RVar[4u].x;
        float _207 = (_204 * _176) + uintBitsToFloat(0u);
        float _210 = inversesqrt(_182) * 0.5;
        RVar[123u].x = _197;
        RVar[123u].y = _202;
        RVar[123u].z = _207;
        RVar[126u].x = _210;
        float _223 = RVar[127u].x;
        float _225 = clamp(_223 + _197, 0.0, 1.0);
        float _227 = RVar[127u].y;
        float _229 = clamp(_227 + _202, 0.0, 1.0);
        float _231 = RVar[127u].z;
        float _233 = clamp(_231 + _207, 0.0, 1.0);
        float _235 = RVar[2u].y;
        RVar[5u].x = (RVar[2u].x * _210) + uintBitsToFloat(1056964608u);
        RVar[127u].y = _225;
        RVar[127u].z = _229;
        RVar[127u].w = _233;
        RVar[5u].y = (_235 * _210) + uintBitsToFloat(1056964608u);
        float _245 = RVar[1u].x;
        float _249 = RVar[1u].z;
        float _253 = RVar[1u].y;
        RVar[5u].z = (RVar[2u].z * RVar[126u].x) + uintBitsToFloat(1056964608u);
        float _271 = RVar[1u].w;
        float _273 = RVar[127u].z;
        float _277 = RVar[1u].w;
        float _279 = RVar[127u].y;
        RVar[3u].x = ((_245 + (-_233)) * RVar[1u].w) + RVar[127u].w;
        RVar[3u].y = ((_253 + (-_229)) * _271) + _273;
        RVar[3u].z = ((_249 + (-_225)) * _277) + _279;
        float _288 = RVar[5u].y;
        float _290 = RVar[5u].z;
        float _292 = RVar[5u].w;
        RVar[1u].x = RVar[5u].x;
        RVar[1u].y = _288;
        RVar[1u].z = _290;
        RVar[1u].w = _292;
        float _300 = RVar[3u].y;
        float _302 = RVar[3u].z;
        float _304 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _300;
        RVar[0u].z = _302;
        RVar[0u].w = _304;
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
    uint _380 = PS_PUSH.alphaFunc >> 8u;
    if (_380 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_380 == 2u)
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
    uint _408 = PS_PUSH.alphaFunc >> 8u;
    if (_408 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_408 == 2u)
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