#!/bin/bash

set -e

echo "Setting environment variables..."

export PORT=3000
export FEDIMINT_API=$(yq e '.fedimintd-config-api' /data/start9/config.yaml)
export REACT_APP_FM_GATEWAY_API=${FEDIMINT_API}

1>&2 echo 'Starting Guardian UI...'
node scripts/replace-react-env.js build && serve -s build