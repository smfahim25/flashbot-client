import * as schemas from "./schemas";

/**
 * AllowedTimeframes
 */
export type AllowedTimeframes =
  | "1m"
  | "3m"
  | "5m"
  | "15m"
  | "30m"
  | "1h"
  | "2h"
  | "4h"
  | "6h"
  | "8h"
  | "12h"
  | "1d"
  | "3d"
  | "1w"
  | "1M";

/**
 * ApiKeys
 */
export type ApiKeys = {
  api_key?: string | unknown;

  api_secret?: string | unknown;
  /**
   * Testnet
   */
  testnet?: boolean;

  last_change?: string | unknown;
};

/**
 * ApiKeysChandeRequest
 */
export type ApiKeysChandeRequest = {
  api_key: string | unknown;

  api_secret: string | unknown;
  /**
   * Testnet
   */
  testnet?: boolean;
};

/**
 * AuthUser
 */
export type AuthUser = {
  /**
   * Username
   */
  username: string;
  /**
   * Pass Hash
   */
  pass_hash: string;
  /**
   * Created Date
   */
  created_date: string;
  /**
   * Id
   * @maxLength 24
   * @minLength 24
   */
  id: string;

  zitadel_id: string | unknown;
};

/**
 * AvailableSymbols
 */
export type AvailableSymbols = {
  /**
   * Symbols
   */
  symbols: Array<schemas.Symbol>;
};

/**
 * BacktestDownloadUrl
 */
export type BacktestDownloadUrl = {
  /**
   * Url
   */
  url: string;
  /**
   * Job Id
   * @maxLength 24
   * @minLength 24
   */
  job_id: string;
};

/**
 * CLOSE_MODE
 */
export type CloseMode = "SL/TP" | "STRATEGY";

/**
 * CreateUser
 */
export type CreateUser = {
  /**
   * Code
   * @maxLength 24
   * @minLength 24
   */
  code: string;
  /**
   * Username
   * @maxLength 50
   * @minLength 3
   */
  username: string;
  /**
   * Password
   * @maxLength 50
   * @minLength 3
   */
  password: string;
};

/**
 * CreateUserExecutor
 */
export type CreateUserExecutor = {
  /**
   * Name
   * @maxLength 50
   */
  name: string;
  /**
   * Symbol
   * @maxLength 50
   */
  symbol: string;
  /**
   * Quantity
   * @minimum 0.00001
   */
  quantity: number;

  take_profit: number | unknown;

  stop_loss: number | unknown;
  /**
   * Paused
   */
  paused?: boolean;

  close_mode?: schemas.CloseMode;
  /**
   * Consensus Treshold
   * @default 100
   */
  consensus_treshold?: number;

  start_mode?: schemas.StartMode;

  leverage: number | unknown;

  quantity_mode?: schemas.ExecuterQuantityMode;
  /**
   * Strategys
   */
  strategys?: Array<schemas.UserStrategy>;
};

/**
 * EXECUTER_QUANTITY_MODE
 */
export type ExecuterQuantityMode = "COIN" | "CURRENCY" | "PERCENTAGE";

/**
 * ExecutorID
 */
export type ExecutorId = {
  /**
   * Id
   * @maxLength 24
   * @minLength 24
   */
  id: string;
};

/**
 * FoundingRates
 */
export type FoundingRates = {
  /**
   * Rates
   */
  rates: Array<schemas.SymbolFoudingRate>;
};

/**
 * HTTPValidationError
 */
export type HttpValidationError = {
  /**
   * Detail
   */
  detail?: Array<schemas.ValidationError>;
};

/**
* JobProgress
* Represents the progress of a backtest job.

Attributes:
    status (JobProgressStatus): The status of the job.
    progress_percentage (int): The progress percentage of the job (between 0 and 100).
*/
export type JobProgress = {
  status: schemas.JobProgressStatus;
  /**
   * Progress Percentage
   * @maximum 100
   */
  progress_percentage: number;
};

/**
 * JobProgressStatus
 */
export type JobProgressStatus =
  | "pending"
  | "in_progress"
  | "complete"
  | "failed";

/**
 * JobType
 */
export type JobType = "backtest" | "filter";

/**
 * NewBacktest
 */
export type NewBacktest = {
  /**
   * End Time
   * @format date-time
   */
  end_time: string;
  /**
   * Start Time
   * @format date-time
   */
  start_time: string;

  executor: {
    /**
     * Name
     * @maxLength 50
     */
    name: string;
    /**
     * Symbol
     * @maxLength 50
     */
    symbol: string;
    /**
     * Quantity
     * @minimum 0.00001
     */
    quantity: number;

    take_profit: number | unknown;

    stop_loss: number | unknown;
    /**
     * Paused
     */
    paused?: boolean;

    close_mode?: schemas.CloseMode;
    /**
     * Consensus Treshold
     * @default 100
     */
    consensus_treshold?: number;

    start_mode?: schemas.StartMode;

    leverage: number | unknown;

    quantity_mode?: schemas.ExecuterQuantityMode;
    /**
     * Strategys
     */
    strategys?: Array<schemas.UserStrategy>;
    /**
     * Id
     * @maxLength 24
     * @minLength 24
     */
    id: string;
    /**
     * Last Change
     * @format date-time
     */
    last_change: string;
  };

  targets: Array<schemas.BacktestTargets> | string;
};

export type BacktestTargets = {
  symbol: string;
  quantity: number;
};

/**
 * NewFilter
 */
export type NewFilter = {
  /**
   * Indicator Name
   */
  indicator_name: string;

  timeframe: schemas.AllowedTimeframes;
  /**
   * Custom Parameters
   */
  custom_parameters?: {};
  /**
   * Instructions
   */
  instructions: string;
};

/**
 * Pong
 */
export type Pong = {
  /**
   * Pong
   */
  pong: number;
};

/**
 * START_MODE
 */
export type StartMode = "LONG" | "SHORT" | "NEUTRAL";

/**
 * SettingDescription
 */
export type SettingDescription = {
  /**
   * Tag
   * @maxLength 50
   */
  tag: string;
  /**
   * Value
   * @maxLength 50
   */
  value: string;
  /**
   * Options
   */
  options: Array<schemas.UserSettingOption>;
  /**
   * Description
   * @maxLength 1000
   */
  description: string;
  /**
   * Name
   * @maxLength 50
   */
  name: string;
};

/**
 * SettingDescriptions
 */
export type SettingDescriptions = {
  /**
   * Settings
   */
  settings: Array<schemas.SettingDescription>;
};

/**
 * StrategyDescription
 */
export type StrategyDescription = {
  /**
   * Name
   * @maxLength 50
   */
  name: string;

  description?: string | unknown;
  /**
   * Parameters
   */
  parameters: {};
  /**
   * Filter Available
   */
  filter_available?: boolean;

  indicator_parameters_schema?: {} | unknown;
};

/**
 * StrategyDescriptions
 */
export type StrategyDescriptions = {
  /**
   * Strategies
   */
  strategies: Array<schemas.StrategyDescription>;
};

/**
 * Symbol
 */
export type Symbol = {
  /**
   * Added To System Date
   * @format date-time
   */
  added_to_system_date: string;
  /**
   * Symbol Name
   * @maxLength 25
   * @minLength 1
   */
  symbol_name: string;
  /**
   * Available For Trading
   */
  available_for_trading?: boolean;
  /**
   * Available For Backtest
   */
  available_for_backtest?: boolean;
};

/**
 * SymbolFoudingRate
 */
export type SymbolFoudingRate = {
  /**
   * Symbol
   */
  symbol: string;
  /**
   * Rate
   */
  rate: number;
};

/**
 * UserBacktestMetadata
 */
export type UserBacktestMetadata = {
  executor_copy: schemas.UserExecutor | unknown;
};

/**
 * UserCloseOrders
 */
export type UserCloseOrders = {
  /**
   * Take Profit
   */
  take_profit: {};
  /**
   * Stop Loss
   */
  stop_loss: {};
};

/**
 * UserExecution
 */
export type UserExecution = {
  /**
   * Id
   * @maxLength 24
   * @minLength 24
   */
  id: string;
  /**
   * Executor Id
   * @maxLength 24
   * @minLength 24
   */
  executor_id: string;
  /**
   * Created Date
   * @format date-time
   */
  created_date: string;
  /**
   * User Id
   * @maxLength 24
   * @minLength 24
   */
  user_id: string;

  action: boolean | unknown;

  intention: schemas.UserIntention;

  pnl: number | unknown;

  dollars_profit: number | unknown;

  error: string | unknown;
  /**
   * Strategys Executed
   */
  strategys_executed: Array<schemas.UserStrategy>;
  /**
   * Executed Correctly
   * @default true
   */
  executed_correctly?: boolean;

  data: {} | unknown;

  filled_data: {} | unknown;

  symbol: string | unknown;
  /**
   * Strategy Outcomes
   */
  strategy_outcomes: Array<unknown>;
  /**
   * Watch For Close
   */
  watch_for_close: boolean;

  close_order: schemas.UserCloseOrders | unknown;
};

/**
 * UserExecutions
 */
export type UserExecutions = {
  /**
   * Executions
   */
  executions: Array<schemas.UserExecution>;
};

/**
 * UserExecutor
 */
export type UserExecutor = {
  /**
   * Name
   * @maxLength 50
   */
  name: string;
  /**
   * Symbol
   * @maxLength 50
   */
  symbol: string;
  /**
   * Quantity
   * @minimum 0.00001
   */
  quantity: number;

  take_profit: number | unknown;

  stop_loss: number | unknown;
  /**
   * Paused
   */
  paused?: boolean;

  close_mode?: schemas.CloseMode;
  /**
   * Consensus Treshold
   * @default 100
   */
  consensus_treshold?: number;

  start_mode?: schemas.StartMode;

  leverage: number | unknown;

  quantity_mode?: schemas.ExecuterQuantityMode;
  /**
   * Strategys
   */
  strategys?: Array<schemas.UserStrategy>;
  /**
   * Id
   * @maxLength 24
   * @minLength 24
   */
  id: string;
  /**
   * Last Change
   * @format date-time
   */
  last_change: string;
};

/**
 * UserExecutors
 */
export type UserExecutors = {
  /**
   * Executors Count
   */
  executors_count: number;
  /**
   * Executors
   */
  executors: Array<schemas.UserExecutor>;
};

/**
 * UserInfo
 */
export type UserInfo = {
  /**
   * Username
   */
  username: string;
  /**
   * Executers Count
   */
  executers_count: number;
  /**
   * Created Date
   */
  created_date: string;
};

/**
 * UserIntention
 */
export type UserIntention = "OPEN" | "CLOSE" | "NONE";

/**
 * UserJob
 */
export type UserJob = {
  /**
   * Id
   * @maxLength 24
   * @minLength 24
   */
  id: string;

  type: schemas.JobType;

  instructions: {} | unknown;

  result: {} | unknown;
  /**
   * User Id
   * @maxLength 24
   * @minLength 24
   */
  user_id: string;
  /**
   * Settings
   */
  settings: {};
  /**
   * Created Date
   * @format date-time
   */
  created_date: string;

  metadata: schemas.UserJobMetadata | unknown;

  progress: schemas.JobProgress;
};

/**
 * UserJobMetadata
 */
export type UserJobMetadata = {
  backtest_metadata: schemas.UserBacktestMetadata | unknown;
};

/**
 * UserJobs
 */
export type UserJobs = {
  /**
   * Jobs
   */
  jobs: Array<schemas.UserJob>;
};

/**
 * UserSetting
 */
export type UserSetting = {
  /**
   * Tag
   * @maxLength 50
   */
  tag: string;
  /**
   * New Value
   * @maxLength 50
   */
  new_value: string;
};

/**
 * UserSettingOption
 */
export type UserSettingOption = {
  /**
   * Value
   * @maxLength 50
   */
  value: string;
  /**
   * Description
   * @maxLength 50
   */
  description: string;
};

/**
 * UserSettings
 */
export type UserSettings = {
  /**
   * Settings
   */
  settings: {};
};

/**
 * UserStrategy
 */
export type UserStrategy = {
  /**
   * Name
   */
  name: string;
  /**
   * Parameters
   */
  parameters: {};
  /**
   * Timeframe
   */
  timeframe: string;
};

/**
 * ValidationError
 */
export type ValidationError = {
  /**
   * Location
   */
  loc: Array<string | number>;
  /**
   * Message
   */
  msg: string;
  /**
   * Error Type
   */
  type: string;
};

function getLength(value: string) {
  return value.length;
}

function isZero(value: number) {
  return value === 0;
}

export function getApiKeysApiKey(apiKeys: ApiKeys) {
  return apiKeys["api_key"];
}

export function getApiKeysApiSecret(apiKeys: ApiKeys) {
  return apiKeys["api_secret"];
}

export function getApiKeysTestnet(apiKeys: ApiKeys) {
  return apiKeys["testnet"];
}

export function isApiKeysTestnet(apiKeys: ApiKeys) {
  return getApiKeysTestnet(apiKeys) === true;
}

export function isNotApiKeysTestnet(apiKeys: ApiKeys) {
  return getApiKeysTestnet(apiKeys) === false;
}

export function isEqualToApiKeysTestnet(apiKeys: ApiKeys, target: boolean) {
  return getApiKeysTestnet(apiKeys) === target;
}

export function getApiKeysLastChange(apiKeys: ApiKeys) {
  return apiKeys["last_change"];
}

export function getApiKeysChandeRequestApiKey(
  apiKeysChandeRequest: ApiKeysChandeRequest
) {
  return apiKeysChandeRequest["api_key"];
}

export function getApiKeysChandeRequestApiSecret(
  apiKeysChandeRequest: ApiKeysChandeRequest
) {
  return apiKeysChandeRequest["api_secret"];
}

export function getApiKeysChandeRequestTestnet(
  apiKeysChandeRequest: ApiKeysChandeRequest
) {
  return apiKeysChandeRequest["testnet"];
}

export function isApiKeysChandeRequestTestnet(
  apiKeysChandeRequest: ApiKeysChandeRequest
) {
  return getApiKeysChandeRequestTestnet(apiKeysChandeRequest) === true;
}

export function isNotApiKeysChandeRequestTestnet(
  apiKeysChandeRequest: ApiKeysChandeRequest
) {
  return getApiKeysChandeRequestTestnet(apiKeysChandeRequest) === false;
}

export function isEqualToApiKeysChandeRequestTestnet(
  apiKeysChandeRequest: ApiKeysChandeRequest,
  target: boolean
) {
  return getApiKeysChandeRequestTestnet(apiKeysChandeRequest) === target;
}

export function getAuthUserUsername(authUser: AuthUser) {
  return authUser["username"];
}

export function isEqualToAuthUserUsername(authUser: AuthUser, target: string) {
  return getAuthUserUsername(authUser) === target;
}

export function getAuthUserUsernameLength(authUser: AuthUser) {
  const value = getAuthUserUsername(authUser);

  return getLength(value);
}

export function isAuthUserUsernameEmpty(authUser: AuthUser) {
  const value = getAuthUserUsernameLength(authUser);

  return isZero(value);
}

export function getAuthUserPassHash(authUser: AuthUser) {
  return authUser["pass_hash"];
}

export function isEqualToAuthUserPassHash(authUser: AuthUser, target: string) {
  return getAuthUserPassHash(authUser) === target;
}

export function getAuthUserPassHashLength(authUser: AuthUser) {
  const value = getAuthUserPassHash(authUser);

  return getLength(value);
}

export function isAuthUserPassHashEmpty(authUser: AuthUser) {
  const value = getAuthUserPassHashLength(authUser);

  return isZero(value);
}

export function getAuthUserCreatedDate(authUser: AuthUser) {
  return authUser["created_date"];
}

export function isEqualToAuthUserCreatedDate(
  authUser: AuthUser,
  target: string
) {
  return getAuthUserCreatedDate(authUser) === target;
}

export function getAuthUserCreatedDateLength(authUser: AuthUser) {
  const value = getAuthUserCreatedDate(authUser);

  return getLength(value);
}

export function isAuthUserCreatedDateEmpty(authUser: AuthUser) {
  const value = getAuthUserCreatedDateLength(authUser);

  return isZero(value);
}

export function getAuthUserId(authUser: AuthUser) {
  return authUser["id"];
}

export function isEqualToAuthUserId(authUser: AuthUser, target: string) {
  return getAuthUserId(authUser) === target;
}

export function getAuthUserIdLength(authUser: AuthUser) {
  const value = getAuthUserId(authUser);

  return getLength(value);
}

export function isAuthUserIdEmpty(authUser: AuthUser) {
  const value = getAuthUserIdLength(authUser);

  return isZero(value);
}

export function getAuthUserZitadelId(authUser: AuthUser) {
  return authUser["zitadel_id"];
}

export function getAvailableSymbolsSymbols(availableSymbols: AvailableSymbols) {
  return availableSymbols["symbols"];
}

export function getBacktestDownloadUrlUrl(
  backtestDownloadUrl: BacktestDownloadUrl
) {
  return backtestDownloadUrl["url"];
}

export function isEqualToBacktestDownloadUrlUrl(
  backtestDownloadUrl: BacktestDownloadUrl,
  target: string
) {
  return getBacktestDownloadUrlUrl(backtestDownloadUrl) === target;
}

export function getBacktestDownloadUrlUrlLength(
  backtestDownloadUrl: BacktestDownloadUrl
) {
  const value = getBacktestDownloadUrlUrl(backtestDownloadUrl);

  return getLength(value);
}

export function isBacktestDownloadUrlUrlEmpty(
  backtestDownloadUrl: BacktestDownloadUrl
) {
  const value = getBacktestDownloadUrlUrlLength(backtestDownloadUrl);

  return isZero(value);
}

export function getBacktestDownloadUrlJobId(
  backtestDownloadUrl: BacktestDownloadUrl
) {
  return backtestDownloadUrl["job_id"];
}

export function isEqualToBacktestDownloadUrlJobId(
  backtestDownloadUrl: BacktestDownloadUrl,
  target: string
) {
  return getBacktestDownloadUrlJobId(backtestDownloadUrl) === target;
}

export function getBacktestDownloadUrlJobIdLength(
  backtestDownloadUrl: BacktestDownloadUrl
) {
  const value = getBacktestDownloadUrlJobId(backtestDownloadUrl);

  return getLength(value);
}

export function isBacktestDownloadUrlJobIdEmpty(
  backtestDownloadUrl: BacktestDownloadUrl
) {
  const value = getBacktestDownloadUrlJobIdLength(backtestDownloadUrl);

  return isZero(value);
}

export function getCreateUserCode(createUser: CreateUser) {
  return createUser["code"];
}

export function isEqualToCreateUserCode(
  createUser: CreateUser,
  target: string
) {
  return getCreateUserCode(createUser) === target;
}

export function getCreateUserCodeLength(createUser: CreateUser) {
  const value = getCreateUserCode(createUser);

  return getLength(value);
}

export function isCreateUserCodeEmpty(createUser: CreateUser) {
  const value = getCreateUserCodeLength(createUser);

  return isZero(value);
}

export function getCreateUserUsername(createUser: CreateUser) {
  return createUser["username"];
}

export function isEqualToCreateUserUsername(
  createUser: CreateUser,
  target: string
) {
  return getCreateUserUsername(createUser) === target;
}

export function getCreateUserUsernameLength(createUser: CreateUser) {
  const value = getCreateUserUsername(createUser);

  return getLength(value);
}

export function isCreateUserUsernameEmpty(createUser: CreateUser) {
  const value = getCreateUserUsernameLength(createUser);

  return isZero(value);
}

export function getCreateUserPassword(createUser: CreateUser) {
  return createUser["password"];
}

export function isEqualToCreateUserPassword(
  createUser: CreateUser,
  target: string
) {
  return getCreateUserPassword(createUser) === target;
}

export function getCreateUserPasswordLength(createUser: CreateUser) {
  const value = getCreateUserPassword(createUser);

  return getLength(value);
}

export function isCreateUserPasswordEmpty(createUser: CreateUser) {
  const value = getCreateUserPasswordLength(createUser);

  return isZero(value);
}

export function getCreateUserExecutorName(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["name"];
}

export function isEqualToCreateUserExecutorName(
  createUserExecutor: CreateUserExecutor,
  target: string
) {
  return getCreateUserExecutorName(createUserExecutor) === target;
}

export function getCreateUserExecutorNameLength(
  createUserExecutor: CreateUserExecutor
) {
  const value = getCreateUserExecutorName(createUserExecutor);

  return getLength(value);
}

export function isCreateUserExecutorNameEmpty(
  createUserExecutor: CreateUserExecutor
) {
  const value = getCreateUserExecutorNameLength(createUserExecutor);

  return isZero(value);
}

export function getCreateUserExecutorSymbol(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["symbol"];
}

export function isEqualToCreateUserExecutorSymbol(
  createUserExecutor: CreateUserExecutor,
  target: string
) {
  return getCreateUserExecutorSymbol(createUserExecutor) === target;
}

export function getCreateUserExecutorSymbolLength(
  createUserExecutor: CreateUserExecutor
) {
  const value = getCreateUserExecutorSymbol(createUserExecutor);

  return getLength(value);
}

export function isCreateUserExecutorSymbolEmpty(
  createUserExecutor: CreateUserExecutor
) {
  const value = getCreateUserExecutorSymbolLength(createUserExecutor);

  return isZero(value);
}

export function getCreateUserExecutorQuantity(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["quantity"];
}

export function isEqualToCreateUserExecutorQuantity(
  createUserExecutor: CreateUserExecutor,
  target: number
) {
  return getCreateUserExecutorQuantity(createUserExecutor) === target;
}

export function getCreateUserExecutorTakeProfit(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["take_profit"];
}

export function getCreateUserExecutorStopLoss(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["stop_loss"];
}

export function getCreateUserExecutorPaused(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["paused"];
}

export function isCreateUserExecutorPaused(
  createUserExecutor: CreateUserExecutor
) {
  return getCreateUserExecutorPaused(createUserExecutor) === true;
}

export function isNotCreateUserExecutorPaused(
  createUserExecutor: CreateUserExecutor
) {
  return getCreateUserExecutorPaused(createUserExecutor) === false;
}

export function isEqualToCreateUserExecutorPaused(
  createUserExecutor: CreateUserExecutor,
  target: boolean
) {
  return getCreateUserExecutorPaused(createUserExecutor) === target;
}

export function getCreateUserExecutorCloseMode(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["close_mode"];
}

export function getCreateUserExecutorConsensusTreshold(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["consensus_treshold"];
}

export function isEqualToCreateUserExecutorConsensusTreshold(
  createUserExecutor: CreateUserExecutor,
  target: number
) {
  return getCreateUserExecutorConsensusTreshold(createUserExecutor) === target;
}

export function getCreateUserExecutorStartMode(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["start_mode"];
}

export function getCreateUserExecutorLeverage(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["leverage"];
}

export function getCreateUserExecutorQuantityMode(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["quantity_mode"];
}

export function getCreateUserExecutorStrategys(
  createUserExecutor: CreateUserExecutor
) {
  return createUserExecutor["strategys"];
}

export function getExecutorIdId(executorId: ExecutorId) {
  return executorId["id"];
}

export function isEqualToExecutorIdId(executorId: ExecutorId, target: string) {
  return getExecutorIdId(executorId) === target;
}

export function getExecutorIdIdLength(executorId: ExecutorId) {
  const value = getExecutorIdId(executorId);

  return getLength(value);
}

export function isExecutorIdIdEmpty(executorId: ExecutorId) {
  const value = getExecutorIdIdLength(executorId);

  return isZero(value);
}

export function getFoundingRatesRates(foundingRates: FoundingRates) {
  return foundingRates["rates"];
}

export function getHttpValidationErrorDetail(
  httpValidationError: HttpValidationError
) {
  return httpValidationError["detail"];
}

export function getJobProgressProgressPercentage(jobProgress: JobProgress) {
  return jobProgress["progress_percentage"];
}

export function isEqualToJobProgressProgressPercentage(
  jobProgress: JobProgress,
  target: number
) {
  return getJobProgressProgressPercentage(jobProgress) === target;
}

export function getNewBacktestEndTime(newBacktest: NewBacktest) {
  return newBacktest["end_time"];
}

export function isEqualToNewBacktestEndTime(
  newBacktest: NewBacktest,
  target: string
) {
  return getNewBacktestEndTime(newBacktest) === target;
}

export function getNewBacktestEndTimeLength(newBacktest: NewBacktest) {
  const value = getNewBacktestEndTime(newBacktest);

  return getLength(value);
}

export function isNewBacktestEndTimeEmpty(newBacktest: NewBacktest) {
  const value = getNewBacktestEndTimeLength(newBacktest);

  return isZero(value);
}

export function getNewBacktestStartTime(newBacktest: NewBacktest) {
  return newBacktest["start_time"];
}

export function isEqualToNewBacktestStartTime(
  newBacktest: NewBacktest,
  target: string
) {
  return getNewBacktestStartTime(newBacktest) === target;
}

export function getNewBacktestStartTimeLength(newBacktest: NewBacktest) {
  const value = getNewBacktestStartTime(newBacktest);

  return getLength(value);
}

export function isNewBacktestStartTimeEmpty(newBacktest: NewBacktest) {
  const value = getNewBacktestStartTimeLength(newBacktest);

  return isZero(value);
}

export function getNewFilterIndicatorName(newFilter: NewFilter) {
  return newFilter["indicator_name"];
}

export function isEqualToNewFilterIndicatorName(
  newFilter: NewFilter,
  target: string
) {
  return getNewFilterIndicatorName(newFilter) === target;
}

export function getNewFilterIndicatorNameLength(newFilter: NewFilter) {
  const value = getNewFilterIndicatorName(newFilter);

  return getLength(value);
}

export function isNewFilterIndicatorNameEmpty(newFilter: NewFilter) {
  const value = getNewFilterIndicatorNameLength(newFilter);

  return isZero(value);
}

export function getNewFilterCustomParameters(newFilter: NewFilter) {
  return newFilter["custom_parameters"];
}

export function getNewFilterInstructions(newFilter: NewFilter) {
  return newFilter["instructions"];
}

export function isEqualToNewFilterInstructions(
  newFilter: NewFilter,
  target: string
) {
  return getNewFilterInstructions(newFilter) === target;
}

export function getNewFilterInstructionsLength(newFilter: NewFilter) {
  const value = getNewFilterInstructions(newFilter);

  return getLength(value);
}

export function isNewFilterInstructionsEmpty(newFilter: NewFilter) {
  const value = getNewFilterInstructionsLength(newFilter);

  return isZero(value);
}

export function getPongPong(pong: Pong) {
  return pong["pong"];
}

export function isEqualToPongPong(pong: Pong, target: number) {
  return getPongPong(pong) === target;
}

export function getSettingDescriptionTag(
  settingDescription: SettingDescription
) {
  return settingDescription["tag"];
}

export function isEqualToSettingDescriptionTag(
  settingDescription: SettingDescription,
  target: string
) {
  return getSettingDescriptionTag(settingDescription) === target;
}

export function getSettingDescriptionTagLength(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionTag(settingDescription);

  return getLength(value);
}

export function isSettingDescriptionTagEmpty(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionTagLength(settingDescription);

  return isZero(value);
}

export function getSettingDescriptionValue(
  settingDescription: SettingDescription
) {
  return settingDescription["value"];
}

export function isEqualToSettingDescriptionValue(
  settingDescription: SettingDescription,
  target: string
) {
  return getSettingDescriptionValue(settingDescription) === target;
}

export function getSettingDescriptionValueLength(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionValue(settingDescription);

  return getLength(value);
}

export function isSettingDescriptionValueEmpty(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionValueLength(settingDescription);

  return isZero(value);
}

export function getSettingDescriptionOptions(
  settingDescription: SettingDescription
) {
  return settingDescription["options"];
}

export function getSettingDescriptionDescription(
  settingDescription: SettingDescription
) {
  return settingDescription["description"];
}

export function isEqualToSettingDescriptionDescription(
  settingDescription: SettingDescription,
  target: string
) {
  return getSettingDescriptionDescription(settingDescription) === target;
}

export function getSettingDescriptionDescriptionLength(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionDescription(settingDescription);

  return getLength(value);
}

export function isSettingDescriptionDescriptionEmpty(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionDescriptionLength(settingDescription);

  return isZero(value);
}

export function getSettingDescriptionName(
  settingDescription: SettingDescription
) {
  return settingDescription["name"];
}

export function isEqualToSettingDescriptionName(
  settingDescription: SettingDescription,
  target: string
) {
  return getSettingDescriptionName(settingDescription) === target;
}

export function getSettingDescriptionNameLength(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionName(settingDescription);

  return getLength(value);
}

export function isSettingDescriptionNameEmpty(
  settingDescription: SettingDescription
) {
  const value = getSettingDescriptionNameLength(settingDescription);

  return isZero(value);
}

export function getSettingDescriptionsSettings(
  settingDescriptions: SettingDescriptions
) {
  return settingDescriptions["settings"];
}

export function getStrategyDescriptionName(
  strategyDescription: StrategyDescription
) {
  return strategyDescription["name"];
}

export function isEqualToStrategyDescriptionName(
  strategyDescription: StrategyDescription,
  target: string
) {
  return getStrategyDescriptionName(strategyDescription) === target;
}

export function getStrategyDescriptionNameLength(
  strategyDescription: StrategyDescription
) {
  const value = getStrategyDescriptionName(strategyDescription);

  return getLength(value);
}

export function isStrategyDescriptionNameEmpty(
  strategyDescription: StrategyDescription
) {
  const value = getStrategyDescriptionNameLength(strategyDescription);

  return isZero(value);
}

export function getStrategyDescriptionDescription(
  strategyDescription: StrategyDescription
) {
  return strategyDescription["description"];
}

export function getStrategyDescriptionParameters(
  strategyDescription: StrategyDescription
) {
  return strategyDescription["parameters"];
}

export function getStrategyDescriptionFilterAvailable(
  strategyDescription: StrategyDescription
) {
  return strategyDescription["filter_available"];
}

export function isStrategyDescriptionFilterAvailable(
  strategyDescription: StrategyDescription
) {
  return getStrategyDescriptionFilterAvailable(strategyDescription) === true;
}

export function isNotStrategyDescriptionFilterAvailable(
  strategyDescription: StrategyDescription
) {
  return getStrategyDescriptionFilterAvailable(strategyDescription) === false;
}

export function isEqualToStrategyDescriptionFilterAvailable(
  strategyDescription: StrategyDescription,
  target: boolean
) {
  return getStrategyDescriptionFilterAvailable(strategyDescription) === target;
}

export function getStrategyDescriptionIndicatorParametersSchema(
  strategyDescription: StrategyDescription
) {
  return strategyDescription["indicator_parameters_schema"];
}

export function getStrategyDescriptionsStrategies(
  strategyDescriptions: StrategyDescriptions
) {
  return strategyDescriptions["strategies"];
}

export function getSymbolAddedToSystemDate(symbol: Symbol) {
  return symbol["added_to_system_date"];
}

export function isEqualToSymbolAddedToSystemDate(
  symbol: Symbol,
  target: string
) {
  return getSymbolAddedToSystemDate(symbol) === target;
}

export function getSymbolAddedToSystemDateLength(symbol: Symbol) {
  const value = getSymbolAddedToSystemDate(symbol);

  return getLength(value);
}

export function isSymbolAddedToSystemDateEmpty(symbol: Symbol) {
  const value = getSymbolAddedToSystemDateLength(symbol);

  return isZero(value);
}

export function getSymbolSymbolName(symbol: Symbol) {
  return symbol["symbol_name"];
}

export function isEqualToSymbolSymbolName(symbol: Symbol, target: string) {
  return getSymbolSymbolName(symbol) === target;
}

export function getSymbolSymbolNameLength(symbol: Symbol) {
  const value = getSymbolSymbolName(symbol);

  return getLength(value);
}

export function isSymbolSymbolNameEmpty(symbol: Symbol) {
  const value = getSymbolSymbolNameLength(symbol);

  return isZero(value);
}

export function getSymbolAvailableForTrading(symbol: Symbol) {
  return symbol["available_for_trading"];
}

export function isSymbolAvailableForTrading(symbol: Symbol) {
  return getSymbolAvailableForTrading(symbol) === true;
}

export function isNotSymbolAvailableForTrading(symbol: Symbol) {
  return getSymbolAvailableForTrading(symbol) === false;
}

export function isEqualToSymbolAvailableForTrading(
  symbol: Symbol,
  target: boolean
) {
  return getSymbolAvailableForTrading(symbol) === target;
}

export function getSymbolAvailableForBacktest(symbol: Symbol) {
  return symbol["available_for_backtest"];
}

export function isSymbolAvailableForBacktest(symbol: Symbol) {
  return getSymbolAvailableForBacktest(symbol) === true;
}

export function isNotSymbolAvailableForBacktest(symbol: Symbol) {
  return getSymbolAvailableForBacktest(symbol) === false;
}

export function isEqualToSymbolAvailableForBacktest(
  symbol: Symbol,
  target: boolean
) {
  return getSymbolAvailableForBacktest(symbol) === target;
}

export function getSymbolFoudingRateSymbol(
  symbolFoudingRate: SymbolFoudingRate
) {
  return symbolFoudingRate["symbol"];
}

export function isEqualToSymbolFoudingRateSymbol(
  symbolFoudingRate: SymbolFoudingRate,
  target: string
) {
  return getSymbolFoudingRateSymbol(symbolFoudingRate) === target;
}

export function getSymbolFoudingRateSymbolLength(
  symbolFoudingRate: SymbolFoudingRate
) {
  const value = getSymbolFoudingRateSymbol(symbolFoudingRate);

  return getLength(value);
}

export function isSymbolFoudingRateSymbolEmpty(
  symbolFoudingRate: SymbolFoudingRate
) {
  const value = getSymbolFoudingRateSymbolLength(symbolFoudingRate);

  return isZero(value);
}

export function getSymbolFoudingRateRate(symbolFoudingRate: SymbolFoudingRate) {
  return symbolFoudingRate["rate"];
}

export function isEqualToSymbolFoudingRateRate(
  symbolFoudingRate: SymbolFoudingRate,
  target: number
) {
  return getSymbolFoudingRateRate(symbolFoudingRate) === target;
}

export function getUserBacktestMetadataExecutorCopy(
  userBacktestMetadata: UserBacktestMetadata
) {
  return userBacktestMetadata["executor_copy"];
}

export function getUserCloseOrdersTakeProfit(userCloseOrders: UserCloseOrders) {
  return userCloseOrders["take_profit"];
}

export function getUserCloseOrdersStopLoss(userCloseOrders: UserCloseOrders) {
  return userCloseOrders["stop_loss"];
}

export function getUserExecutionId(userExecution: UserExecution) {
  return userExecution["id"];
}

export function isEqualToUserExecutionId(
  userExecution: UserExecution,
  target: string
) {
  return getUserExecutionId(userExecution) === target;
}

export function getUserExecutionIdLength(userExecution: UserExecution) {
  const value = getUserExecutionId(userExecution);

  return getLength(value);
}

export function isUserExecutionIdEmpty(userExecution: UserExecution) {
  const value = getUserExecutionIdLength(userExecution);

  return isZero(value);
}

export function getUserExecutionExecutorId(userExecution: UserExecution) {
  return userExecution["executor_id"];
}

export function isEqualToUserExecutionExecutorId(
  userExecution: UserExecution,
  target: string
) {
  return getUserExecutionExecutorId(userExecution) === target;
}

export function getUserExecutionExecutorIdLength(userExecution: UserExecution) {
  const value = getUserExecutionExecutorId(userExecution);

  return getLength(value);
}

export function isUserExecutionExecutorIdEmpty(userExecution: UserExecution) {
  const value = getUserExecutionExecutorIdLength(userExecution);

  return isZero(value);
}

export function getUserExecutionCreatedDate(userExecution: UserExecution) {
  return userExecution["created_date"];
}

export function isEqualToUserExecutionCreatedDate(
  userExecution: UserExecution,
  target: string
) {
  return getUserExecutionCreatedDate(userExecution) === target;
}

export function getUserExecutionCreatedDateLength(
  userExecution: UserExecution
) {
  const value = getUserExecutionCreatedDate(userExecution);

  return getLength(value);
}

export function isUserExecutionCreatedDateEmpty(userExecution: UserExecution) {
  const value = getUserExecutionCreatedDateLength(userExecution);

  return isZero(value);
}

export function getUserExecutionUserId(userExecution: UserExecution) {
  return userExecution["user_id"];
}

export function isEqualToUserExecutionUserId(
  userExecution: UserExecution,
  target: string
) {
  return getUserExecutionUserId(userExecution) === target;
}

export function getUserExecutionUserIdLength(userExecution: UserExecution) {
  const value = getUserExecutionUserId(userExecution);

  return getLength(value);
}

export function isUserExecutionUserIdEmpty(userExecution: UserExecution) {
  const value = getUserExecutionUserIdLength(userExecution);

  return isZero(value);
}

export function getUserExecutionAction(userExecution: UserExecution) {
  return userExecution["action"];
}

export function getUserExecutionPnl(userExecution: UserExecution) {
  return userExecution["pnl"];
}

export function getUserExecutionDollarsProfit(userExecution: UserExecution) {
  return userExecution["dollars_profit"];
}

export function getUserExecutionError(userExecution: UserExecution) {
  return userExecution["error"];
}

export function getUserExecutionStrategysExecuted(
  userExecution: UserExecution
) {
  return userExecution["strategys_executed"];
}

export function getUserExecutionExecutedCorrectly(
  userExecution: UserExecution
) {
  return userExecution["executed_correctly"];
}

export function isUserExecutionExecutedCorrectly(userExecution: UserExecution) {
  return getUserExecutionExecutedCorrectly(userExecution) === true;
}

export function isNotUserExecutionExecutedCorrectly(
  userExecution: UserExecution
) {
  return getUserExecutionExecutedCorrectly(userExecution) === false;
}

export function isEqualToUserExecutionExecutedCorrectly(
  userExecution: UserExecution,
  target: boolean
) {
  return getUserExecutionExecutedCorrectly(userExecution) === target;
}

export function getUserExecutionData(userExecution: UserExecution) {
  return userExecution["data"];
}

export function getUserExecutionFilledData(userExecution: UserExecution) {
  return userExecution["filled_data"];
}

export function getUserExecutionSymbol(userExecution: UserExecution) {
  return userExecution["symbol"];
}

export function getUserExecutionStrategyOutcomes(userExecution: UserExecution) {
  return userExecution["strategy_outcomes"];
}

export function getUserExecutionWatchForClose(userExecution: UserExecution) {
  return userExecution["watch_for_close"];
}

export function isUserExecutionWatchForClose(userExecution: UserExecution) {
  return getUserExecutionWatchForClose(userExecution) === true;
}

export function isNotUserExecutionWatchForClose(userExecution: UserExecution) {
  return getUserExecutionWatchForClose(userExecution) === false;
}

export function isEqualToUserExecutionWatchForClose(
  userExecution: UserExecution,
  target: boolean
) {
  return getUserExecutionWatchForClose(userExecution) === target;
}

export function getUserExecutionCloseOrder(userExecution: UserExecution) {
  return userExecution["close_order"];
}

export function getUserExecutionsExecutions(userExecutions: UserExecutions) {
  return userExecutions["executions"];
}

export function getUserExecutorName(userExecutor: UserExecutor) {
  return userExecutor["name"];
}

export function isEqualToUserExecutorName(
  userExecutor: UserExecutor,
  target: string
) {
  return getUserExecutorName(userExecutor) === target;
}

export function getUserExecutorNameLength(userExecutor: UserExecutor) {
  const value = getUserExecutorName(userExecutor);

  return getLength(value);
}

export function isUserExecutorNameEmpty(userExecutor: UserExecutor) {
  const value = getUserExecutorNameLength(userExecutor);

  return isZero(value);
}

export function getUserExecutorSymbol(userExecutor: UserExecutor) {
  return userExecutor["symbol"];
}

export function isEqualToUserExecutorSymbol(
  userExecutor: UserExecutor,
  target: string
) {
  return getUserExecutorSymbol(userExecutor) === target;
}

export function getUserExecutorSymbolLength(userExecutor: UserExecutor) {
  const value = getUserExecutorSymbol(userExecutor);

  return getLength(value);
}

export function isUserExecutorSymbolEmpty(userExecutor: UserExecutor) {
  const value = getUserExecutorSymbolLength(userExecutor);

  return isZero(value);
}

export function getUserExecutorQuantity(userExecutor: UserExecutor) {
  return userExecutor["quantity"];
}

export function isEqualToUserExecutorQuantity(
  userExecutor: UserExecutor,
  target: number
) {
  return getUserExecutorQuantity(userExecutor) === target;
}

export function getUserExecutorTakeProfit(userExecutor: UserExecutor) {
  return userExecutor["take_profit"];
}

export function getUserExecutorStopLoss(userExecutor: UserExecutor) {
  return userExecutor["stop_loss"];
}

export function getUserExecutorPaused(userExecutor: UserExecutor) {
  return userExecutor["paused"];
}

export function isUserExecutorPaused(userExecutor: UserExecutor) {
  return getUserExecutorPaused(userExecutor) === true;
}

export function isNotUserExecutorPaused(userExecutor: UserExecutor) {
  return getUserExecutorPaused(userExecutor) === false;
}

export function isEqualToUserExecutorPaused(
  userExecutor: UserExecutor,
  target: boolean
) {
  return getUserExecutorPaused(userExecutor) === target;
}

export function getUserExecutorCloseMode(userExecutor: UserExecutor) {
  return userExecutor["close_mode"];
}

export function getUserExecutorConsensusTreshold(userExecutor: UserExecutor) {
  return userExecutor["consensus_treshold"];
}

export function isEqualToUserExecutorConsensusTreshold(
  userExecutor: UserExecutor,
  target: number
) {
  return getUserExecutorConsensusTreshold(userExecutor) === target;
}

export function getUserExecutorStartMode(userExecutor: UserExecutor) {
  return userExecutor["start_mode"];
}

export function getUserExecutorLeverage(userExecutor: UserExecutor) {
  return userExecutor["leverage"];
}

export function getUserExecutorQuantityMode(userExecutor: UserExecutor) {
  return userExecutor["quantity_mode"];
}

export function getUserExecutorStrategys(userExecutor: UserExecutor) {
  return userExecutor["strategys"];
}

export function getUserExecutorId(userExecutor: UserExecutor) {
  return userExecutor["id"];
}

export function isEqualToUserExecutorId(
  userExecutor: UserExecutor,
  target: string
) {
  return getUserExecutorId(userExecutor) === target;
}

export function getUserExecutorIdLength(userExecutor: UserExecutor) {
  const value = getUserExecutorId(userExecutor);

  return getLength(value);
}

export function isUserExecutorIdEmpty(userExecutor: UserExecutor) {
  const value = getUserExecutorIdLength(userExecutor);

  return isZero(value);
}

export function getUserExecutorLastChange(userExecutor: UserExecutor) {
  return userExecutor["last_change"];
}

export function isEqualToUserExecutorLastChange(
  userExecutor: UserExecutor,
  target: string
) {
  return getUserExecutorLastChange(userExecutor) === target;
}

export function getUserExecutorLastChangeLength(userExecutor: UserExecutor) {
  const value = getUserExecutorLastChange(userExecutor);

  return getLength(value);
}

export function isUserExecutorLastChangeEmpty(userExecutor: UserExecutor) {
  const value = getUserExecutorLastChangeLength(userExecutor);

  return isZero(value);
}

export function getUserExecutorsExecutorsCount(userExecutors: UserExecutors) {
  return userExecutors["executors_count"];
}

export function isEqualToUserExecutorsExecutorsCount(
  userExecutors: UserExecutors,
  target: number
) {
  return getUserExecutorsExecutorsCount(userExecutors) === target;
}

export function getUserExecutorsExecutors(userExecutors: UserExecutors) {
  return userExecutors["executors"];
}

export function getUserInfoUsername(userInfo: UserInfo) {
  return userInfo["username"];
}

export function isEqualToUserInfoUsername(userInfo: UserInfo, target: string) {
  return getUserInfoUsername(userInfo) === target;
}

export function getUserInfoUsernameLength(userInfo: UserInfo) {
  const value = getUserInfoUsername(userInfo);

  return getLength(value);
}

export function isUserInfoUsernameEmpty(userInfo: UserInfo) {
  const value = getUserInfoUsernameLength(userInfo);

  return isZero(value);
}

export function getUserInfoExecutersCount(userInfo: UserInfo) {
  return userInfo["executers_count"];
}

export function isEqualToUserInfoExecutersCount(
  userInfo: UserInfo,
  target: number
) {
  return getUserInfoExecutersCount(userInfo) === target;
}

export function getUserInfoCreatedDate(userInfo: UserInfo) {
  return userInfo["created_date"];
}

export function isEqualToUserInfoCreatedDate(
  userInfo: UserInfo,
  target: string
) {
  return getUserInfoCreatedDate(userInfo) === target;
}

export function getUserInfoCreatedDateLength(userInfo: UserInfo) {
  const value = getUserInfoCreatedDate(userInfo);

  return getLength(value);
}

export function isUserInfoCreatedDateEmpty(userInfo: UserInfo) {
  const value = getUserInfoCreatedDateLength(userInfo);

  return isZero(value);
}

export function getUserJobId(userJob: UserJob) {
  return userJob["id"];
}

export function isEqualToUserJobId(userJob: UserJob, target: string) {
  return getUserJobId(userJob) === target;
}

export function getUserJobIdLength(userJob: UserJob) {
  const value = getUserJobId(userJob);

  return getLength(value);
}

export function isUserJobIdEmpty(userJob: UserJob) {
  const value = getUserJobIdLength(userJob);

  return isZero(value);
}

export function getUserJobInstructions(userJob: UserJob) {
  return userJob["instructions"];
}

export function getUserJobResult(userJob: UserJob) {
  return userJob["result"];
}

export function getUserJobUserId(userJob: UserJob) {
  return userJob["user_id"];
}

export function isEqualToUserJobUserId(userJob: UserJob, target: string) {
  return getUserJobUserId(userJob) === target;
}

export function getUserJobUserIdLength(userJob: UserJob) {
  const value = getUserJobUserId(userJob);

  return getLength(value);
}

export function isUserJobUserIdEmpty(userJob: UserJob) {
  const value = getUserJobUserIdLength(userJob);

  return isZero(value);
}

export function getUserJobSettings(userJob: UserJob) {
  return userJob["settings"];
}

export function getUserJobCreatedDate(userJob: UserJob) {
  return userJob["created_date"];
}

export function isEqualToUserJobCreatedDate(userJob: UserJob, target: string) {
  return getUserJobCreatedDate(userJob) === target;
}

export function getUserJobCreatedDateLength(userJob: UserJob) {
  const value = getUserJobCreatedDate(userJob);

  return getLength(value);
}

export function isUserJobCreatedDateEmpty(userJob: UserJob) {
  const value = getUserJobCreatedDateLength(userJob);

  return isZero(value);
}

export function getUserJobMetadata(userJob: UserJob) {
  return userJob["metadata"];
}

export function getUserJobMetadataBacktestMetadata(
  userJobMetadata: UserJobMetadata
) {
  return userJobMetadata["backtest_metadata"];
}

export function getUserJobsJobs(userJobs: UserJobs) {
  return userJobs["jobs"];
}

export function getUserSettingTag(userSetting: UserSetting) {
  return userSetting["tag"];
}

export function isEqualToUserSettingTag(
  userSetting: UserSetting,
  target: string
) {
  return getUserSettingTag(userSetting) === target;
}

export function getUserSettingTagLength(userSetting: UserSetting) {
  const value = getUserSettingTag(userSetting);

  return getLength(value);
}

export function isUserSettingTagEmpty(userSetting: UserSetting) {
  const value = getUserSettingTagLength(userSetting);

  return isZero(value);
}

export function getUserSettingNewValue(userSetting: UserSetting) {
  return userSetting["new_value"];
}

export function isEqualToUserSettingNewValue(
  userSetting: UserSetting,
  target: string
) {
  return getUserSettingNewValue(userSetting) === target;
}

export function getUserSettingNewValueLength(userSetting: UserSetting) {
  const value = getUserSettingNewValue(userSetting);

  return getLength(value);
}

export function isUserSettingNewValueEmpty(userSetting: UserSetting) {
  const value = getUserSettingNewValueLength(userSetting);

  return isZero(value);
}

export function getUserSettingOptionValue(
  userSettingOption: UserSettingOption
) {
  return userSettingOption["value"];
}

export function isEqualToUserSettingOptionValue(
  userSettingOption: UserSettingOption,
  target: string
) {
  return getUserSettingOptionValue(userSettingOption) === target;
}

export function getUserSettingOptionValueLength(
  userSettingOption: UserSettingOption
) {
  const value = getUserSettingOptionValue(userSettingOption);

  return getLength(value);
}

export function isUserSettingOptionValueEmpty(
  userSettingOption: UserSettingOption
) {
  const value = getUserSettingOptionValueLength(userSettingOption);

  return isZero(value);
}

export function getUserSettingOptionDescription(
  userSettingOption: UserSettingOption
) {
  return userSettingOption["description"];
}

export function isEqualToUserSettingOptionDescription(
  userSettingOption: UserSettingOption,
  target: string
) {
  return getUserSettingOptionDescription(userSettingOption) === target;
}

export function getUserSettingOptionDescriptionLength(
  userSettingOption: UserSettingOption
) {
  const value = getUserSettingOptionDescription(userSettingOption);

  return getLength(value);
}

export function isUserSettingOptionDescriptionEmpty(
  userSettingOption: UserSettingOption
) {
  const value = getUserSettingOptionDescriptionLength(userSettingOption);

  return isZero(value);
}

export function getUserSettingsSettings(userSettings: UserSettings) {
  return userSettings["settings"];
}

export function getUserStrategyName(userStrategy: UserStrategy) {
  return userStrategy["name"];
}

export function isEqualToUserStrategyName(
  userStrategy: UserStrategy,
  target: string
) {
  return getUserStrategyName(userStrategy) === target;
}

export function getUserStrategyNameLength(userStrategy: UserStrategy) {
  const value = getUserStrategyName(userStrategy);

  return getLength(value);
}

export function isUserStrategyNameEmpty(userStrategy: UserStrategy) {
  const value = getUserStrategyNameLength(userStrategy);

  return isZero(value);
}

export function getUserStrategyParameters(userStrategy: UserStrategy) {
  return userStrategy["parameters"];
}

export function getUserStrategyTimeframe(userStrategy: UserStrategy) {
  return userStrategy["timeframe"];
}

export function isEqualToUserStrategyTimeframe(
  userStrategy: UserStrategy,
  target: string
) {
  return getUserStrategyTimeframe(userStrategy) === target;
}

export function getUserStrategyTimeframeLength(userStrategy: UserStrategy) {
  const value = getUserStrategyTimeframe(userStrategy);

  return getLength(value);
}

export function isUserStrategyTimeframeEmpty(userStrategy: UserStrategy) {
  const value = getUserStrategyTimeframeLength(userStrategy);

  return isZero(value);
}

export function getValidationErrorLoc(validationError: ValidationError) {
  return validationError["loc"];
}

export function getValidationErrorMsg(validationError: ValidationError) {
  return validationError["msg"];
}

export function isEqualToValidationErrorMsg(
  validationError: ValidationError,
  target: string
) {
  return getValidationErrorMsg(validationError) === target;
}

export function getValidationErrorMsgLength(validationError: ValidationError) {
  const value = getValidationErrorMsg(validationError);

  return getLength(value);
}

export function isValidationErrorMsgEmpty(validationError: ValidationError) {
  const value = getValidationErrorMsgLength(validationError);

  return isZero(value);
}

export function getValidationErrorType(validationError: ValidationError) {
  return validationError["type"];
}

export function isEqualToValidationErrorType(
  validationError: ValidationError,
  target: string
) {
  return getValidationErrorType(validationError) === target;
}

export function getValidationErrorTypeLength(validationError: ValidationError) {
  const value = getValidationErrorType(validationError);

  return getLength(value);
}

export function isValidationErrorTypeEmpty(validationError: ValidationError) {
  const value = getValidationErrorTypeLength(validationError);

  return isZero(value);
}
