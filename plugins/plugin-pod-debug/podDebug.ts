import { z, path, Router, send } from '@server/mod.ts'

import { t } from '@quasipanacea/common/index.ts'
import { serverUtil } from '@quasipanacea/plugin-utility/server/index.ts'

export type State = {}

export const hooks: t.Hooks<State> = {
	makeState(pod) {
		return {}
	},
	async onPodAdd(pod, state) {},
}

const trpc = serverUtil.useTrpc<State>()

export const trpcRouter = trpc.router({})