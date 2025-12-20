#pragma once

template <typename... Ts>
struct OverloadedVisitor : Ts... {
    using Ts::operator()...;
};

template <typename... Ts>
OverloadedVisitor(Ts...) -> OverloadedVisitor<Ts...>;
