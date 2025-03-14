import { supabase } from "@ohmychat/ohmychat-backend-core";
import getUserChat from "./handlers/getUserChat.js";
import { messagesChanges, membersChanges, groupsChanges } from "./handlers/changes";
export { namespace } from "./namespace";

supabase.channel('ohmychat-realtime-messages')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_group_messages' }, messagesChanges)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'chat_group_messages' }, messagesChanges)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_group_members' }, membersChanges)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'chat_group_members' }, membersChanges)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_groups' }, groupsChanges)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'chat_groups' }, groupsChanges)
    .subscribe()

export default function(socket) {
    socket.on('chat/get', getUserChat);
    //console.log(db);
    console.log('hello');
}