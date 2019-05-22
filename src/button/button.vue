<template>
    <button class="my_button" :class="btnClass">
        <span class="btn_content">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'my-button',
    props: {
        'type': {
            type: String,
            validator (val) {
                return ['primary', 'info', 'success', 'warning', 'danger'].includes(val);
            }
        },
        'disabled': {
            type: Boolean,
            default: false
        },
        "round": {
            type: Boolean,
            default: false
        },
        "plain": {
            type: Boolean,
            default: false
        }
    },
    computed: {
        btnClass() {
            let classList = []
            if (this.type) classList.push(`btn_${this.type}`)
            if (this.disabled) classList.push(`btn_disabled`)
            if (this.round) classList.push(`btn_round`)
            if (this.plain) classList.push(`plain`)
            return classList.join(' ')
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$border-radius: 4px;

$default-color: #606266;
$default-border-color: #999;
$default-hover-color: #409eff;
$default-hover-bd-color: #c6e2ff;
$default-hover-bg-color: #ecf5ff;
$default-active-color: #3a8ee6;

$primary-color: #409eff;
$primary-font-color: #fff;
$primary-hover-focus: #66b1ff;
$primary-active: #3a8ee6;


$info-color: #909399;
$info-font-color: #fff;
$info-active: #82848a;
$info-hover-focus: #a6a9ad;

$success-color: #67c23a;
$success-font-color: #fff;
$success-active: #5daf34;
$success-hover-focus: #85ce61;

$warning-color: #e6a23c;
$warning-font-color: #fff;
$warning-active: #cf9236;
$warning-hover-focus: #ebb563;

$danger-color: #f56c6c;
$danger-font-color: #fff;
$danger-active: #dd6161;
$danger-hover-focus: #f78989;

@mixin btn_style($color) {
    border-color: $color;
    background-color: $color;
}

@mixin btn_variant($color, $bg-bd-color, $hover-foucs-color, $active-color) {
    @include btn_style($bg-bd-color);
    color: #fff;
    &:hover, &:focus {
        @include btn_style($hover-foucs-color);
    }
    &:active {
        @include btn_style($active-color);
    }
}


.my_button {
    font-size: $font-size;
    color: $default-color;
    background-color: #fff;
    border: 1px solid $default-border-color;
    border-radius: $border-radius;
    padding: 12px 20px;
    line-height: 1;
    cursor: pointer;
    outline: none;

    &:hover, &:focus {
        color: $default-hover-color;
        border-color: $default-hover-bd-color;
        background-color: $default-hover-bg-color;
    }
    &:active {
        color: $default-active-color;
        border-color: $default-active-color;
    }

    &.btn_disabled {
        cursor: not-allowed;
        opacity: .7;
        &:hover, &:active {
            opacity: .7;
        }
    }

    &.btn_round {
        border-radius: 20px;
    }

    &.btn_primary {
        @include btn_variant($primary-font-color, $primary-color, $primary-hover-focus, $primary-active);
    }

    &.btn_success {
        @include btn_variant($success-font-color, $success-color, $success-hover-focus, $success-active);
    }

    &.btn_warning {
        @include btn_variant($warning-font-color, $warning-color, $warning-hover-focus, $warning-active);
    }

    &.btn_info {
        @include btn_variant($info-font-color, $info-color, $info-hover-focus, $info-active);
    }

    &.btn_danger {
        @include btn_variant($danger-font-color, $danger-color, $danger-hover-focus, $danger-active);
    }
}


// .my_button {
//     font-size: $font-size;
//     color: $default-color;
//     background-color: #fff;
//     border: 1px solid $default-border-color;
//     border-radius: $border-radius;
//     padding: 12px 20px;
//     line-height: 1;
//     cursor: pointer;
//     outline: none;

//     &:hover, &:focus {
//         color: $default-hover-color;
//         border-color: $default-hover-bd-color;
//         background-color: $default-hover-bg-color;
//     }
//     &:active {
//         color: $default-active-color;
//         border-color: $default-active-color;
//     }

//     &.btn_disabled {
//         cursor: not-allowed;
//         opacity: .7;
//         &:hover, &:active {
//             opacity: .7;
//         }
//     }

//     &.btn_round {
//         border-radius: 20px;
//     }

//     &.btn_primary {
//         @include btn_style($color-primary);
//         color: #fff;
//         &:hover, &:focus {
//             @include btn_style($primary-hover-focus);
//         }
//         &:active {
//             @include btn_style($primary-active);
//         }
//     }

//     &.btn_success {
//         @include btn_style($color-success);
//         color: #fff;
//         &:hover, &:focus {
//             @include btn_style($success-hover-focus);
//         }
//         &:active {
//             @include btn_style($success-hover-focus);
//         }
//     }

//     &.btn_warning {
//         @include btn_style($color-warning);
//         color: #fff;
//         &:hover, &:focus {
//             @include btn_style($warning-hover-focus);
//         }
//         &:active {
//             @include btn_style($warning-active);
//         }
//     }

//     &.btn_info {
//         @include btn_style($color-info);
//         color: #fff;
//         &:hover, &:focus {
//             @include btn_style($info-hover-focus);
//         }
//         &:active {
//             @include btn_style($info-active);
//         }
//     }

//     &.btn_danger {
//         @include btn_style($color-danger);
//         color: #fff;
//         &:hover, &:focus {
//             @include btn_style($danger-hover-focus);
//         }
//         &:active {
//             @include btn_style($danger-active);
//         }
//     }
// }


</style>

