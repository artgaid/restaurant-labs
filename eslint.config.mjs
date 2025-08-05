// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

import withNuxt from './.nuxt/eslint.config.mjs';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

export default withNuxt(
	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	),
	...pluginVue.configs['flat/recommended'],
	{
		plugins: {
			'simple-import-sort': eslintPluginSimpleImportSort,
		},

		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
			},
		},

		rules: {
			'no-console': ['warn', { allow: ['error', 'warn'] }], // разрешает использование console.warn и console.error, но выдаёт предупреждение при использовании console.log.
			'no-undef': 'off', // отключает проверку на использование необъявленных переменных
			'no-constant-condition': 'error', // выдавать ошибку при использовании постоянных условий в условных операторах (например, if (true))
			'no-extra-semi': 'warn', // выдавать ошибку при обнаружении лишних точек с запятой
			'no-empty': 'error', // выдавать ошибку при обнаружении пустых блоков кода (без комментариев)
			'quote-props': [2, 'as-needed'], // определяет стиль использования кавычек в именах свойств объектов
			'prefer-destructuring': ['error', { object: true, array: false }], // обязывает использовать деструктуризацию объектов, где это возможно
			// --- Eslint. Autofixable ---
			'arrow-body-style': ['error', 'as-needed'], // оборачивает тело стрелочной функции в {} только когда это необходимо
			'dot-notation': 'error', // если мы обращаемся к параметрам объекта, то обращаемся через точку, а не через some_obj['some_prop']
			eqeqeq: 'error', // не забываем писать третье равно
			'logical-assignment-operators': ['error', 'always'], // запрет на присваивание в логическом выражении (например, в теле ифа)
			'no-extend-native': 'error', // не расширяем примитивные типы новыми методами
			'no-lonely-if': 'error', // если в else есть if, то конструкция должна схлопываться в else if
			'no-unneeded-ternary': 'error', // нет бессмысленных тернарников, содержащих true или false
			'no-useless-computed-key': 'error', // лучше писать { 'a': 0 } чем { ['a']: 0 }
			'no-useless-return': 'error', // бессмысленных return-ов быть не должно (return, которые прекращают функцию -- ок)
			'no-var': 'error', // используем  только let и const
			'object-shorthand': 'error', // используем {x, y} вместо {x: x, y: y} и { a() {} } вместо { a: function() {} }
			'prefer-const': 'error', // стараемся не использовать let, там, где можно использовать const
			// 'sort-imports': 'error', // импорты отсортированы в алфавитном порядке и по типам (можно донастраивать)
			yoda: 'error', // при сравнении вначале должна идти переменная, а только потом -- потенциальное значение
			// --- Eslint. Questionable ---
			'no-else-return': 'error', // autofixable. Если есть if, в котором есть return, то дальше нет необходимости в else-утверждении
			// https://eslint.org/docs/latest/rules/no-implicit-coercion - спорно
			'no-useless-concat': 'error', // сложение строк должно быть задано сразу результатом, если в нём нет необходимости
			'operator-assignment': ['error', 'always'], // x += 1 вместо x = x + 1 (autofixable)
			// https://eslint.org/docs/latest/rules/prefer-template
			'require-await': 'warn', // это только потенциальная ошибка, но иногда это нужно по функционалу

			// --- Eslint. Off-block ---

			// --- Eslint. Wanted ---
			// complexity: ['warn', 11], // ограничение размера функции через количество логических конструкций
			'default-case': 'error', // если есть switch, то должен быть default
			'default-case-last': 'error', // default должен быть последним
			'default-param-last': ['error'], // параметр с указанным дефолтным значением должен идти последним
			// 'func-style': ['warn', 'expression'], // присваиваем функции переменным, а не объявляем их глобально
			'no-alert': 'warn', // предупреждает, если видит следы дебага через alert, prompt или confirm
			'no-array-constructor': 'error', // запрет на использование Array(...) синтаксиса (это не про Array.from())
			'no-bitwise': 'warn', // обычно мы не используем побитовые сдвиги и прочие бинарные операции. Если они есть в коде, то, возможно, что-то не так
			'no-labels': 'error', // мы не используем labels в JS, поэтому, если они появились, то где-то возникла ошибка
			'no-lone-blocks': 'error', // не ставить блоки {...} без необходимости
			'no-multi-assign': 'error', // если встречается несколько = не подряд на одной строке, то, вероятнее всего, это -- ошибка
			'no-param-reassign': 'warn', // запрет на присваивание значений параметрам функции (может стрелять в ногу ссылочностью)
			'no-return-assign': 'error', // функция не должна возвращать присваивание
			'no-shadow': 'warn', // запрет на название переменных аналогично переменным из верхнего скоупа
			// --- Vue ---
			'vue/block-lang': [
				'error',
				{
					script: {
						lang: 'ts',
					},
				},
			],

			// 'vue/component-api-style': ['error', ['script-setup']], // все компоненты должны быть script setup
			'vue/component-name-in-template-casing': ['error', 'PascalCase'], // компоненты должны быть использованы в pascal case
			'vue/custom-event-name-casing': ['error', 'camelCase'], // требует использования camelCase (начинающийся с маленькой буквы) для имен пользовательских событий в компонентах Vue
			'vue/define-emits-declaration': ['error', 'type-based'], // эмиты объявлены через defineEmits<{...}>()
			'vue/define-macros-order': [
				'error',
				{
					order: ['defineProps', 'defineEmits'],
				},
			], // вначале должны быть описаны типы пропсов, потом -- эмитов
			'vue/html-indent': ['error', 'tab'],
			'vue/singleline-html-element-content-newline': 'off',
			'vue/define-props-declaration': ['error', 'type-based'], // пропсы объявлены через defineProps<{...}>()
			'vue/no-multiple-objects-in-class': 'error', // если класс задан объектом, то объект должен быть один
			'vue/no-ref-object-reactivity-loss': 'warn', // если мы на грани потери реактивности рефа, то будет предупреждение
			'vue/no-unused-refs': 'error', // все template refs должны быть использованы
			'vue/padding-line-between-blocks': ['error', 'always'], // между template, script и style ставить линию отступа
			'vue/prefer-separate-static-class': 'error', // статичные классы должны лежать отдельно
			'vue/prefer-true-attribute-shorthand': ['error', 'always'], // если передаём аттрибут true, то можем не писать значение, а просто указывать аттрибут
			'vue/require-typed-ref': 'error', // у рефа должен быть явный тип или явное дефолтное значение
			'vue/static-class-names-order': 'error', // сортируем названия классов в алфавитном порядке
			'vue/no-useless-concat': 'error', // запрещает бесполезное использование операции конкатенации строк в шаблоне Vue
			'vue/no-empty-component-block': 'error', // запрещает пустые блоки в компонентах
			'vue/no-useless-mustaches': 'error', // запрещает бесполезное использование двойных фигурных скобок.
			'vue/eqeqeq': 'error', // требует использование строгого равенства (===)
			'vue/block-order': [
				'error',
				{
					order: ['template', 'script', 'style'],
				},
			],
			'vue/require-macro-variable-name': [
				'error',
				{
					defineProps: 'props',
					defineEmits: 'emit',
				},
			], // фиксируем одинаковые названия для defineProps, defineEmits
			'vue/no-static-inline-styles': [
				// запрещает использование статических встроенных стилей
				'error',
				{
					allowBinding: true,
				},
			],
			'vue/no-restricted-props': ['error', 'disable', 'isDisable', 'isDisabled'], // use `disabled` prop name

			// --- Other ---
			'prettier/prettier': [
				'error',
				{
					useTabs: true,
					trailingComma: 'all',
				},
			],
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
	{
		files: ['./pages/**/*.vue', './layouts/**/*.vue', 'error.vue', 'app.vue'],
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
);
