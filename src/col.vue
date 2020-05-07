<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = (value) => {
    // 这个值必须匹配下列字符串中的一个
    // :xs="{span:12, offset:0}"
    let validKey = ['span', 'offset']
    let keys = Object.keys(value)
    keys.forEach((key) => {
        if (!validKey.includes(key)) {
            return false
        }
    })
    return true
}
export default {
    name: 'Col',
    props: {
        spen: [Number, String],
        offset: [Number, String],
        xs: { type: Object, validator },
        sm: { type: Object, validator },
        md: { type: Object, validator },
        lg: { type: Object, validator },
        xl: { type: Object, validator },
        xxl: { type: Object, validator },
    },
    data() {
        return {
            gutter: [Number, String],
        }
    },
    computed: {
        colClass() {
            let { spen, offset, xs, sm, lg, xl, xxl } = this
            let ClassKeys = [xs, sm, lg, xl, xxl]
            let keys = ['xs', 'sm', 'lg', 'xl', 'xxl']

            let allClass = [spen && `col-${spen}`, offset && `offset-${offset}`]
            for (let i = 0; i < ClassKeys.length; i++) {
                let k = ClassKeys[i]
                if (k) {
                    let e = [
                        k.span && `col-${keys[i]}-${k.span}`,
                        k.offset && `offset-${keys[i]}-${k.offset}`,
                    ]
                    allClass.push(...e)
                }
            }
            return allClass
        },
        colStyle() {
            let { gutter } = this
            return {
                paddingLeft: gutter / 2 + 'px',
                paddingRight: gutter / 2 + 'px',
            }
        },
    },
}
</script>
<style lang="scss">
.col {
    height: 100px;
    width: 50%;
    outline: 1px dashed #007eff;
    $col: col-;
    @for $n from 1 through 24 {
        &.#{$col}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
    $offset: offset-;
    @for $n from 1 through 24 {
        &.#{$offset}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }
}
@media only screen and (max-width: 576px) {
    .col {
        $col: col-xs-;
        $offset: offset-xs-;
        @for $n from 1 through 24 {
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
@media only screen and (min-width: 576px) {
    .col {
        $col: col-sm-;
        $offset: offset-sm-;
        @for $n from 1 through 24 {
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
@media only screen and (min-width: 768px) {
    .col {
        $col: col-md-;
        $offset: offset-md-;
        @for $n from 1 through 24 {
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
@media only screen and (min-width: 992px) {
    .col {
        $col: col-lg-;
        $offset: offset-lg-;
        @for $n from 1 through 24 {
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
@media only screen and (min-width: 1200px) {
    .col {
        $col: col-xl-;
        $offset: offset-xl-;
        @for $n from 1 through 24 {
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
@media only screen and (min-width: 1600px) {
    .col {
        $col: col-xxl-;
        $offset: offset-xxl-;
        @for $n from 1 through 24 {
            &.#{$col}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
</style>
