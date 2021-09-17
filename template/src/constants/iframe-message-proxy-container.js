import { CommandMethod, CommandStatus, NotificationEvent } from 'lime-js';
import BlipPortalDestinations from './blip-portal-destinations';
import IframeMessageProxyActions from './iframe-message-proxy-actions';

class IframeMessageProxyContainer {
    static CommandMethods = CommandMethod;

    static CommandStatus = CommandStatus;

    static NotificationEvents = NotificationEvent;

    static Destinations = BlipPortalDestinations;

    static Actions = IframeMessageProxyActions;
}

export default IframeMessageProxyContainer;
