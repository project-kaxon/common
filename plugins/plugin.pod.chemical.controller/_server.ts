import { pluginServer } from '@quasipanacea/common/server/index.ts'

import { metadata, format } from './_isomorphic.ts'
import * as Exports from './podChemical.ts'

export async function init() {
	pluginServer.register({
		metadata,
		podController: {
			...Exports,
		},
	})
}
