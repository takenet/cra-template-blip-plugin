import { CommandMethod, CommandStatus, NotificationEvent } from 'lime-js';
import * as BlipPortalDestinations from './blip-portal-destinations';
import * as IframeMessageProxyActions from './iframe-message-proxy-actions';

const CommandMethods = CommandMethod;
const NotificationEvents = NotificationEvent;
const Destinations = BlipPortalDestinations;
const Actions = IframeMessageProxyActions;

export {
    CommandMethods,
    CommandStatus,
    NotificationEvents,
    Destinations,
    Actions
};
