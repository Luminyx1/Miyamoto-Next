#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;
uniform sampler2D tex_map1;

layout(location = 2) in vec4 PARAM_2;
layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
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
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_1;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_64.x, _64.y, _64.z, RVar[3u].w);
        vec4 _79 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_79.x, _79.y, _79.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _89 = RVar[2u].z;
        float _91 = RVar[2u].z;
        float _94 = RVar[0u].z;
        float _96 = RVar[3u].z;
        float _99 = (_94 * _96) + uintBitsToFloat(0u);
        float _101 = RVar[0u].y;
        float _103 = RVar[3u].y;
        float _106 = (_101 * _103) + uintBitsToFloat(0u);
        float _108 = RVar[0u].x;
        float _110 = RVar[3u].x;
        float _113 = (_108 * _110) + uintBitsToFloat(0u);
        RVar[123u].y = _99;
        RVar[123u].z = _106;
        RVar[123u].w = _113;
        RVar[0u].w = uintBitsToFloat(1052770304u);
        float _136 = RVar[2u].y;
        float _138 = RVar[2u].y;
        float _140 = (_136 * _138) + (_89 * _91);
        RVar[122u].x = _140;
        float _144 = RVar[4u].z;
        float _147 = (clamp((_99 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0) * _144) + uintBitsToFloat(0u);
        float _149 = RVar[4u].y;
        float _152 = (clamp((_106 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0) * _149) + uintBitsToFloat(0u);
        float _154 = RVar[4u].x;
        float _157 = (clamp((_113 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0) * _154) + uintBitsToFloat(0u);
        float _159 = RVar[2u].x;
        float _161 = RVar[2u].x;
        float _163 = (_159 * _161) + _140;
        RVar[123u].x = _147;
        RVar[123u].y = _152;
        RVar[123u].z = _157;
        RVar[123u].w = _163;
        RVar[4u].w = uintBitsToFloat(1065353216u);
        float _173 = clamp(_147 + uintBitsToFloat(0u), 0.0, 1.0);
        float _176 = clamp(_152 + uintBitsToFloat(0u), 0.0, 1.0);
        float _179 = clamp(_157 + uintBitsToFloat(0u), 0.0, 1.0);
        float _182 = inversesqrt(_163) * 0.5;
        RVar[127u].y = _173;
        RVar[127u].z = _176;
        RVar[127u].w = _179;
        RVar[127u].x = _182;
        float _189 = RVar[1u].x;
        float _199 = RVar[1u].z;
        float _203 = RVar[1u].y;
        float _207 = RVar[2u].x;
        RVar[4u].y = (RVar[2u].y * _182) + uintBitsToFloat(1056964608u);
        RVar[4u].x = (_207 * _182) + uintBitsToFloat(1056964608u);
        float _220 = RVar[1u].w;
        float _222 = RVar[127u].z;
        float _226 = RVar[1u].w;
        float _228 = RVar[127u].y;
        float _232 = RVar[2u].z;
        float _234 = RVar[127u].x;
        float _237 = (_232 * _234) + uintBitsToFloat(1056964608u);
        RVar[0u].x = ((_189 + (-_179)) * RVar[1u].w) + RVar[127u].w;
        RVar[0u].y = ((_203 + (-_176)) * _220) + _222;
        RVar[0u].z = ((_199 + (-_173)) * _226) + _228;
        RVar[4u].z = _237;
        float _245 = RVar[4u].y;
        float _247 = RVar[4u].w;
        RVar[2u].x = RVar[4u].x;
        RVar[2u].y = _245;
        RVar[2u].z = _237;
        RVar[2u].w = _247;
        float _255 = RVar[0u].y;
        float _257 = RVar[0u].z;
        float _259 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _255;
        RVar[1u].z = _257;
        RVar[1u].w = _259;
    }
    switch (PS_PUSH.alphaFunc & 255u)
    {
        case 0u:
        {
            discard;
        }
        case 1u:
        {
            if (!(RVar[1u].w < PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 2u:
        {
            if (abs(RVar[1u].w - PS_PUSH.alphaRef) > 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 3u:
        {
            if (!(RVar[1u].w <= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 4u:
        {
            if (!(RVar[1u].w > PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 5u:
        {
            if (abs(RVar[1u].w - PS_PUSH.alphaRef) <= 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 6u:
        {
            if (!(RVar[1u].w >= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
    }
    _pixelTmp = RVar[1u];
    uint _335 = PS_PUSH.alphaFunc >> 8u;
    if (_335 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_335 == 2u)
        {
            _pixelTmp = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 1u) != 0u)
    {
        _pixelTmp *= vec4(_pixelTmp.www, 1.0);
    }
    if (PS_PUSH.uIsSelected != 0) PIXEL_0 = vec4(_pixelTmp.rgb * 0.5f + vec3(1.0f, 0.25f, 0.25f) * 0.5f, _pixelTmp.a); else PIXEL_0 = _pixelTmp; ItemID = PS_PUSH.uItemID;
    _pixelTmp_1 = RVar[2u];
    uint _363 = PS_PUSH.alphaFunc >> 8u;
    if (_363 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_363 == 2u)
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