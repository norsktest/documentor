import js from '@eslint/js'
import ts from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs['flat/recommended'],
    {
        languageOptions: {
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                // ...globals.svelte,
                $state: true,
                $props: true,
                $derived: true,
                $effect: true,
                $inspect: true,
            },
        },
    },
    {
        files: ['**/*.ts', '**/*.js', '**/*.svelte'],
        languageOptions: {
            parserOptions: {
                parser: ts.parser,
            },
        },
    },
    {
        rules: {
            // '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            'svelte/no-at-html-tags': 'warn',
        },
    },
    {
        ignores: [
            'build/',
            'docs/',
            '.svelte-kit/',
            'templates/',
            'dist/',
            'coverage/',
            '.vercel/',
            '*.config.js',
            'src/**/*.test.*',
            'src/drizzle/*.d.ts',
            'src/lib/components/ui/',
        ],
    },
]
